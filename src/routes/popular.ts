import express from 'express'
import fetch from 'node-fetch'
import config from '../../config'

const router = express.Router({ mergeParams: true })

// @route    GET api/popular
// @desc     Get popular movies
// @access   Public
router.get('/', async (req, res) => {
  try {
    const data = await fetch(
      `${config.baseApiUrl}movie/popular?api_key=${config.apiKey}`
    )
    const response = await data.json()

    res.json(response)
  } catch (error) {
    res.send('error')
  }
})

export default router
