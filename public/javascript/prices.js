let discountPercentage = 25;

let prices = [
    {
        page_views:'10K',
        monthly_price:8
    },
    {
        page_views:'50K',
        monthly_price:12
    },
    {
        page_views:'100K',
        monthly_price:16
    },
    {
        page_views:'500K',
        monthly_price:24
    },
    {
        page_views:'1M',
        monthly_price:36
    }
]


function getRegularPrice(index){
    return prices[index].monthly_price;
}

function getDiscountPrice(index){
    return (prices[index].monthly_price * (1 - (discountPercentage/100)));
}



// exported methods (used in methods.js)
export function getPrice(index, discount){
    return (discount === true) ? getDiscountPrice(index) : getRegularPrice(index);
}

export function getViews(index){
    return prices[index].page_views;
}