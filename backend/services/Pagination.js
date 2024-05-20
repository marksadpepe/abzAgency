class PaginationService {
  getPaginatedEntities(page, count, entitiesArr) {
    const arr = [];
    const totalPages = this.getTotalPages(entitiesArr, count);

    if (page > totalPages) {
      throw new Error("404:Page not found");
    }

    let inner = []
    entitiesArr.forEach(item => {
      if (inner.length == count) {
        arr.push(inner);
        inner = [];
      }
      inner.push(item);
    });
    arr.push(inner);

    return {
      entities: arr,
      totalPages
    };
  }

  getTotalPages(arr, count) {
    let totalPages = 0;
    const floor = Math.floor(arr.length / count);

    if (floor == arr.length / count) {
      totalPages = floor;
    } else {
      totalPages = floor + 1;
    }

    return totalPages;
  }
}

module.exports = new PaginationService();
