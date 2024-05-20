class LinkService {
  generateLinks(page, count, totalPages) {
    let prevLink = null;
    let nextLink = null;

    if (page > 1) {
      prevLink = `/api/v1/users?page=${page-1}&count=${count}`;
    }

    if (page < totalPages) {
      nextLink = `/api/v1/users?page=${page+1}&count=${count}`;
    }

    return {prevLink, nextLink};
  }
}

module.exports = new LinkService();
