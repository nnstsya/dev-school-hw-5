class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    itemCount() {
        return this.collection.length;
    }

    pageCount() {
        if (this.collection.length === 0) {
            return 0;
        } else {
            return Math.ceil(this.collection.length / this.itemsPerPage);
        }
    }

    pageItemCount(pageIndex) {
        if (pageIndex >= 0 && pageIndex < this.pageCount()) {
            if (pageIndex < this.pageCount() - 1) {
                return this.itemsPerPage;
            } else {
                return this.collection.length % this.itemsPerPage || this.itemsPerPage;
            }
        } else {
            return -1;
        }
    }

    pageIndex(itemIndex) {
        if (itemIndex < this.collection.length && itemIndex >= 0) {
            return Math.trunc(itemIndex / this.itemsPerPage);
        } else {
            return -1;
        }
    }
}