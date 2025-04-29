const PATHS = {
    HOME: "/",
    FAVORITES: "/favorites",
    DETAILS: "/details/:id",
    getDetailsUrl(id) {
        return this.DETAILS.replace(':id', id);
    }
};
  
export default PATHS;