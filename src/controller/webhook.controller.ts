import { Request, Response } from "express"

export class WebhookController {

    webhook = async (req: Request, res: Response) => {
        console.log(JSON.stringify(req.query));
        const mood = req.query['hub.mode'];
        const challenge = req.query['hub.challenge'];
        let verify_token = req.query['hub.verify_token'];
        console.log(mood, challenge, verify_token);
        if (mood === "subscribe" && verify_token === '1234567890') {
            res.send(challenge);
            return;
        }
        res.send('Enter, Wrong token');
    }

    webhookMessage = async(req: Request, res: Response) => {
        console.log(JSON.stringify(req.body));
    }

}