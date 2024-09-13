const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const popularDomains = [
    "mail.ru"
];

// Функция для чтения имен из файла
function readNamesFromFile(filePath) {
    const data = fs.readFileSync(filePath, 'utf8');
    return data.split('\n').map(line => line.replace('\r', '')).filter(line => line.trim() !== '');
}

// Функция перемешивания массива (алгоритм Фишера-Йетса)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Читаем имена из файла
const namesFilePath = path.join(__dirname, 'russian_names.txt');
const russianNames = readNamesFromFile(namesFilePath);

// Читаем и перемешиваем учетные записи
let accounts = shuffleArray(
    readNamesFromFile(path.join(__dirname, 'imap.txt')).map(line => {
        const [email, password] = line.split('|');
        return { email, password, line };
    })
);

// Читаем список отправленных писем
const sentEmailList = readNamesFromFile(path.join(__dirname, 'sent_emails.txt')); // Убедитесь, что этот файл существует

// Создаем транспортер для отправки почты
function createTransporter(email, password) {
    return nodemailer.createTransport({
        host: 'smtp.mail.ru',
        port: 465,
        secure: true,
        auth: {
            user: email,
            pass: password,
        }
    });
}

// Генерация случайного email на основе имен из файла
// Генерация случайного email на основе имен из файла
async function generateRandomEmail() {
    const firstName = russianNames[Math.floor(Math.random() * russianNames.length)];
    const year = Math.floor(Math.random() * 3) + 2004;

    // Генерация случайного дня и месяца
    const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0'); // День от 01 до 28
    const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0'); // Месяц от 01 до 12

    const domain = popularDomains[Math.floor(Math.random() * popularDomains.length)];

    // Объединяем год, день и месяц
    const email = `${firstName}.spb@${domain}`;
    console.log(email)

    return email;
}


const MAX_EMAILS_PER_ACCOUNT = 150;

let currentAccountIndex = 0;
let emailsSentWithCurrentAccount = 0;

async function sendEmail(transporter, to, from) {
    try {
        let info = await transporter.sendMail({
            from: `"Man" <${from}>`,
            to: to,
            subject: 'Готов содержать',
            text: 'Я с сайта ...',
            html: `
            <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2>Привет</h2>
            <p style="font-size: 16px;">
                я с сайта... секс классика, мне больше важен партнёр – сама девушка, привлекательность, энергетика. Ищу девушку для постоянных встреч по условиям 30 000 за встречу.
            </p>
            <p style="font-size: 16px;">
                Напиши мне в телеграм: @magicLife344
            </p>
        </div>        
            `,
            headers: { 'X-Confirm-Reading-To': from },
        });
        console.log(`Email sent to ${to}: from:  ${from} count: ${emailsSentWithCurrentAccount}`);
        emailsSentWithCurrentAccount++;
        fs.appendFileSync('sent_emails.txt', `${to}\n`, 'utf8');
    } catch (error) {
        if (error.responseCode === 451) {
            console.error('Ratelimit exceeded. Stopping the script.');
            console.log(accounts[currentAccountIndex]);
            currentAccountIndex++;
            await delay(900000);
        }
        return error.responseCode;
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sendBulkEmails() {
    while (emailsSentWithCurrentAccount < MAX_EMAILS_PER_ACCOUNT) {
        if (currentAccountIndex >= accounts.length) {
            currentAccountIndex = 0;
            shuffleArray(accounts);  // Перемешиваем учетные записи при каждом цикле
        }

        const { email, password, line } = accounts[currentAccountIndex];
        const transporter = createTransporter(email, password);

        const generatedEmail = await generateRandomEmail();
        if (!sentEmailList.includes(generatedEmail)) {
            let res = await sendEmail(transporter, generatedEmail, email);

            if (res === 535) {
                console.log(email, password, res);
                // Удаляем учетную запись из массива
                accounts.splice(currentAccountIndex, 1);
                // Перезаписываем файл imap.txt
                fs.writeFileSync(path.join(__dirname, 'imap.txt'), accounts.map(acc => acc.line).join('\n'), 'utf8');
                continue; // Переходим к следующей учетной записи
            }

            if (res != 550) {
                await delay(4000);
                console.log(res)
            } else {
                console.log(`${generatedEmail} rejected. ${res}`);
            }
        }


        if (emailsSentWithCurrentAccount >= MAX_EMAILS_PER_ACCOUNT) {
            emailsSentWithCurrentAccount = 0;
            currentAccountIndex++;
        }
    }

    console.log('Все письма были успешно отправлены.');
}

sendBulkEmails();
