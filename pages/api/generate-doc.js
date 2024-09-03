import fs from 'fs';
import { PDFDocument, StandardFonts } from 'pdf-lib';
import path from "path";

export default async function handler(req, res) {
    const user = req.body.user;
    console.log(req.body);

    try {
        // Загрузка существующего PDF файла
        const pdfPath = path.join(process.cwd(), "public", "pdf", "template.pdf");
        const pdfBytes = fs.readFileSync(pdfPath);

        // Загрузка PDF документа
        const pdfDoc = await PDFDocument.load(pdfBytes);

        // Встраивание шрифта, поддерживающего кириллицу (например, Helvetica)
        const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

        // Функция для удаления непечатаемых символов и приведения к стандартной кодировке
        function sanitizeText(text) {
            return text.replace(/[^\x00-\x7F]/g, ""); // Удаление непечатаемых символов
        }

        // Получение первой страницы (или используйте цикл для нескольких страниц)
        const pages = pdfDoc.getPages();
        const firstPage = pages[1];

        // Первая колонка
        firstPage.drawText(sanitizeText(`${user.lastName}`), {
            x: 150,
            y: 453,
            size: 8,
            font: helveticaFont, // Используем шрифт, который поддерживает кириллицу
        });

        firstPage.drawText(sanitizeText(`${user.firstName}`), {
            x: 150,
            y: 437,
            size: 8,
            font: helveticaFont,
        });

        firstPage.drawText(sanitizeText(`${user.fullAddress || user.city}`), {
            x: 150,
            y: 425,
            size: 8,
            font: helveticaFont,
        });

        firstPage.drawText(sanitizeText(`${user.postalCode}`), {
            x: 150,
            y: 408,
            size: 8,
            font: helveticaFont,
        });

        firstPage.drawText(sanitizeText(`${user.dateOfBirth}`), {
            x: 150,
            y: 395,
            size: 8,
            font: helveticaFont,
        });

        firstPage.drawText(sanitizeText(`X`), {
            x: 267,
            y: 504,
            size: 12,
            font: helveticaFont,
        });

        // Вторая колонка
        firstPage.drawText(sanitizeText(`${user.phoneNumber}`), {
            x: 380,
            y: 453,
            size: 8,
            font: helveticaFont,
        });

        firstPage.drawText(sanitizeText(`(202) 772-9295`), { // Поле Fax пустое, но можно заменить на реальные данные если они есть
            x: 380,
            y: 437,
            size: 8,
            font: helveticaFont,
        });

        firstPage.drawText(sanitizeText(`${user.email}`), {
            x: 380,
            y: 425,
            size: 8,
            font: helveticaFont,
        });

        firstPage.drawText(sanitizeText(`${user.country}`), {
            x: 380,
            y: 393,
            size: 8,
            font: helveticaFont,
        });

        // Сохранение отредактированного PDF
        const pdfBytesUpdated = await pdfDoc.save();
        const outputPdfPath = path.join(process.cwd(), "public", "pdf", "output.pdf");
        fs.writeFileSync(outputPdfPath, pdfBytesUpdated);

        // Возвращаем путь к PDF файлу
        res.status(200).json({ message: "PDF updated", path: `/pdf/output.pdf` });
    } catch (error) {
        console.error("Error updating PDF:", error);
        res.status(500).json({ message: "Failed to update PDF", error: error.message });
    }
}
