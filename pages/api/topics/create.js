import Filter from 'bad-words-chinese'
import { query } from '../../../lib/db'

const filter = new Filter()

const handler = async (req, res) => {
  const { title, content, author, avatarUrl } = req.body
  try {
    if (!title || !content || !author || !avatarUrl) {
      return res
        .status(400)
        .json({ message: '`title`, `content`, `author`, `avatarUrl` are both required' })
    }

    const results = await query(
      `
      INSERT INTO topics (title, content, author, avatarUrl)
      VALUES (?, ?, ?, ?)
      `,
      [filter.clean(title), filter.clean(content), filter.clean(author), filter.clean(avatarUrl)]
    )

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
