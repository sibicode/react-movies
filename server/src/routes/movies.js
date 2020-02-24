import express from 'express'
import fetch from 'node-fetch'
import config from '../../config'

const router = express.Router();

// @route    GET api/movies
// @desc     Get latest movies
// @access   Public
router.get('/', async (req, res) => {
  try {
    const data = await fetch(
      `${config.baseApiUrl}discover/movie?sort_by=popularity.desc&api_key=${config.apiKey}`
    );
    const response = await data.json();

    res.json(response);
  } catch (error) {
    res.send('error');
  }
});

export default router
