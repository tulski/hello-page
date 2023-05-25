import {NextApiRequest, NextApiResponse} from "next";
import { register, collectDefaultMetrics } from "prom-client";

collectDefaultMetrics({ prefix: "hellopage_" });

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    return new Response(await register.metrics(),
        {
            status: 200,
            headers: {
                "Content-type": register.contentType
            }
        }
    )
}

