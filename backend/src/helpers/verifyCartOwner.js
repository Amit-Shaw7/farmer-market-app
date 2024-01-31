const verifyCartOwner = (userId , cartId) => {
    if(userId !== cartId) {
        return false;
    }
    return true;
};

export default verifyCartOwner;