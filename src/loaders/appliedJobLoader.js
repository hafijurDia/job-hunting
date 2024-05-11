import { getShoppingCart } from "../utilities/fakedb";

const appliedJobLoader = async () => {
    const loadedJobs = await fetch('http://localhost:3335/jobs');
    const jobs = await loadedJobs.json();
    
    //if cart data is in database, you have to use async await
    const storedCart = getShoppingCart();
    const savedCart = [];

    for( const id in storedCart){
        const addedProduct = jobs.find(pd => pd.id === id);
        if (addedProduct) {
            savedCart.push(addedProduct);

        }
    }

    // if i need to return two things 
    //return [products, savedCart]
    // another option
    // return {products, savedCart}

    return savedCart;

}

export default appliedJobLoader;