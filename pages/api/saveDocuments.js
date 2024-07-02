import { createWriteStream, readFile } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';
import { pipeline } from 'stream';
import { promisify } from 'util';
import busboy from 'busboy';
import dbConnect from '../../lib/dbConnect';
import User from '../../models/User';

const pipelineAsync = promisify(pipeline);

export const config = {
  api: {
    bodyParser: false,
  },
};

const saveDocument = async (req, res) => {
  // Логирование заголовков запроса
  console.log('Request Headers:', req.headers);

  const bb = busboy({ headers: req.headers });
  const fields = {};
  let filePath;

  bb.on('file', (name, file, info) => {
    const { filename, encoding, mimeType } = info;
    console.log(`File [${name}]: filename: ${filename}, encoding: ${encoding}, mimeType: ${mimeType}`);

    filePath = join(tmpdir(), filename);
    const writeStream = createWriteStream(filePath);
    file.pipe(writeStream);

    file.on('data', data => {
      console.log(`File [${name}] got ${data.length} bytes`);
    }).on('close', () => {
      console.log(`File [${name}] done`);
    });
  });

  bb.on('field', (name, val, info) => {
    fields[name] = val;
    console.log(`Field [${name}]: value: ${val}`);
  });

  bb.on('close', async () => {
    console.log('Fields:', fields);
    console.log('File path:', filePath);

    if (!filePath) {
      console.error('No file uploaded');
      res.status(400).send('No file uploaded');
      return;
    }

    const fileData = await promisify(readFile)(filePath);

    await dbConnect();

    try {
      // Логирование ID пользователя и данные файла перед обновлением в базе данных
      console.log('User ID:', fields.userId);
      console.log('File data length:', fileData.length);

      await User.updateOne(
        { _id: fields.userId },
        { $set: { signedDocuments: fileData } },
        { upsert: true }
      );
      res.status(200).send('Documents saved');
    } catch (error) {
      console.error('Error saving documents:', error);
      res.status(500).send('Error saving documents');
    }
  });

  req.pipe(bb);
};

export default saveDocument;
