import cds from "@sap/cds";
import { getDestination } from '@sap-cloud-sdk/connectivity';
import { executeHttpRequest } from "@sap-cloud-sdk/http-client";

export class BooksService extends cds.ApplicationService {
    async init() {
        const { Books } = this.entities;

        this.after("READ", Books, async (data) => {
            for (const book of data) {
                const reviews = await readReviews(book.slug)
                book.reviews = reviews;
            }

            return data;
        })

        this.on("READ", 'Reviews', async req => {
            const reviewService = await cds.connect.to("ReviewService")
            return reviewService.run(req.query);
        })

        return super.init();
    }
}

const destinationName = "reviews"

async function readReviews(slug) {
    const destination = await getDestination({
        destinationName: destinationName,
    })

    const response = await executeHttpRequest(destination, {
        method: "GET",
        url: `/odata/v4/review/Reviews?$filter=slug eq '${slug}'`
    })
    return response.data.value;
}
