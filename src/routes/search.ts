import express from 'express'
import fetch from 'node-fetch'
import config from '../../config'

const router = express.Router({ mergeParams: true })

// @route    GET api/search
// @desc     search movie
// @access   Public
router.get('/', async (req, res) => {
  try {
    const data = await fetch(
      `${config.baseApiUrl}search/movie?query=${req.query.s}&api_key=${config.apiKey}`
    )
    const response = await data.json()

    res.json(response)
  } catch (error) {
    res.send('error')
  }
})

export default router

