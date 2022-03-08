import React from "react";
import _ from 'lodash';


export function EachCard(props) {
    
    let combinedBadge = [props.card.type, ...props.card.skin, ...props.card.other];
    let allBadges = combinedBadge.map((badge) => {
        return (<span key={badge} className="badge rounded-pill bg-light text-dark same">{badge}</span>)
    })

    return (
        <div className="col-md-4 col-lg-3 d-flex mt-4">
            <div className="card">
                <div className="card-body">
                    <img src={props.card.img} className="card-img-top" alt={props.card.name} />
                    <h2 className="card-text-brand">{props.card.brand}</h2>
                    <p className="card-text-title">{props.card.name}</p>
                    <p className="card-text-category">{props.card.treatment} {props.card.type}</p>
                    <p className="card-text-price">${props.card.price}</p>
                </div>
                <button className="wishlist btn btn-success btn-sm" type="button">Add to Wishlist</button>
                <div className="card-footer">
                    {allBadges}
                </div>
            </div>
        </div>
    )

}

export function AllCards(props) {

    const sortedData = props.data;

    // if (props.state === '1') {
    //     _.sortBy(sortedData, ['price'])
    // } else if (props.state === '2') {
    //     _.reverse(_.sortBy(sortedData, ['price']));
    // } 
  
    
    let cardList = sortedData.map((product) => {
        return (<EachCard key={product.name} card={product} />)
    })

    return (
            <section className="products-list">
                <div className="row">
                    {cardList}
                    { cardList.length < 1 && <h2 className="sorry">Sorry, there are no products to display with your filters. Please try again.</h2>}
                    <p className="citation">All product photos can be sourced from <cite><a
                        href="https://www.allure.com/gallery/best-of-beauty-skin-care-product-winners">Allure"s 2021
                        Best of Beauty Awards</a></cite>.</p>
                </div>
            </section>
    )
}

