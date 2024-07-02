import dbConnect from '../../lib/dbConnect';
import User from '../../models/User';
import { ObjectId } from 'mongodb';

const downloadDocument = async (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    res.status(400).json({ error: 'User ID is required' });
    return;
  }

  await dbConnect();

  try {
    const user = await User.findById(ObjectId(userId));
    if (!user || !user.signedDocuments) {
      res.status(404).json({ error: 'Document not found' });
      return;
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=signedDocuments.pdf');
    res.send(user.signedDocuments);
  } catch (error) {
    console.error('Error downloading document:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default downloadDocument;
