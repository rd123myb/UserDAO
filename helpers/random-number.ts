import {NextApiRequest, NextApiResponse} from 'next'

export default function (req: NextApiRequest, res: NextApiResponse){

    res.end ('Hi, there')

    res.json({num: Math.floor(Math.random()*10)})

}