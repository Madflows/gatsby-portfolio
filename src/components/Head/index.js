import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

const Head = (props) => {

    const title = `${props.title} — Folarin Lawal`

    return (

        <Helmet>
            
            <title>{title}</title>

            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="author" content="Folarin Lawal" />
            <meta name="description" content={props.description} />

            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@aaronshapiro" />
            <meta name="twitter:creator" content="@aaronshapiro" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={props.description} />
            <meta name="twitter:image" content="http://www.aaron.mn/social_card.png" />
            <meta name="twitter:image:alt" content="Folarin Lawal's website logo" />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={props.description} />
            <meta property="og:image" content="http://www.aaron.mn/social_card.png" />

            <html lang="en" />

        </Helmet>

    )
}

Head.defaultProps = {
    title: "Folarin Lawal",
    description: "Folarin Lawal is a product designer in Brooklyn, New York.",
    lang: `en`,
}

Head.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    image: PropTypes.object,
    meta: PropTypes.array,
    keywords: PropTypes.arrayOf(PropTypes.string),
    pathname: PropTypes.string,
    title: PropTypes.string.isRequired
}

export default Head