import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const dbPath = path.join(process.cwd(), 'db.json');
    const rawData = fs.readFileSync(dbPath);
    const data = JSON.parse(rawData);

    res.status(200).json(data.cards);
  } else {
    res.status(405).json({ message: 'Метод не разрешен' });
  }
}