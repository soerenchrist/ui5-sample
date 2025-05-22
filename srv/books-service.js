const{ ApplicationService } = require("@sap/cds")

module.exports = class BooksService extends ApplicationService {
    init() {
        const { Books } = this.entities;

        this.before("CREATE", Books, () => {
            console.log("CREATE is called")
        })

        this.before("UPDATE", Books, () => {
            console.log("UPDATE is called")
        })

        return super.init();
    }
}
