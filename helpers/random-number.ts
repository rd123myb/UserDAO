import {NextApiRequest, NextApiResponse} from 'next'


//little rng, just practise for integrating / transpiling typescript with babel

export default function (req: NextApiRequest, res: NextApiResponse){

    res.end ('Hi, there')

    res.json({num: Math.floor(Math.random()*10)})

}