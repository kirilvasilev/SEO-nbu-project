import React from 'react';
import PropTypes from 'prop-types';
import './LoadMoreButton.css';

let pageNumber = 2;

export class LoadMoreButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {shouldLoadMore: true};
    }

    fetchNextPage = (() => {

            const eventsPerRequest = 3;

            return () => {

                const pageTotalNumber = this.props.total/eventsPerRequest + 1;

                if(pageTotalNumber >= pageNumber){
                    this.props.fetchEvents(pageNumber)
                    if(pageTotalNumber === pageNumber) this.setState({ shouldLoadMore: false });
                    pageNumber++;
                } else {
                    this.setState({ shouldLoadMore: false });
                }
            };
    })();

    render() {
        if(!this.state.shouldLoadMore) return null;
        return (
            <footer className="app__footer">
                <button
                    className="footer__load-more-btn"
                    data-js="footer__load-more-btn"
                    onClick={() => this.fetchNextPage()}
                    title={"Load More"}
                >Load More</button>
            </footer>
        );
    }
}

LoadMoreButton.propTypes = {
    fetchEvents: PropTypes.func.isRequired
}

export default LoadMoreButton;