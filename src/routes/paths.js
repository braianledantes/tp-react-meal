const PATHS = {
    HOME: "/",
    FAVORITES: "/favorites",
    DETAILS: "/details/:id",
    ERROR:"/error",
    getDetailsUrl(id) {
        return this.DETAILS.replace(':id', id);
    }
};
  
export default PATHS;