import React from 'react';
import { connect } from 'react-redux';
import NewsItems from '../components/NewsItems';

let TopNews = ({ data, loading }) => {
    let topNews = "";
    if (data) {
        topNews = data.map((article, index) =>
        (
            <div key={`${index}`} className="row">
                <NewsItems article={data[index]} />
            </div>
        ))
    }
    if (loading) {
        topNews = <h3 className="loading-indicator">Loading ...</h3>
    }

    return (
        <div data-test="component-topnews">
            {topNews}
        </div>
    )
};

const mapStateToProps = (state) => ({
    data: state.data,
    loading: state.loading
});

export default connect(mapStateToProps, null)(TopNews);