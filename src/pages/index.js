import React from "react"
import WritingList from "../components/WritingList"
import Head from "../components/Head"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import WorkList from "../components/WorkList"

const Index = () => {
    return (
        <Layout>
            <Head title="Home" />
            <section>
                <Hero />
            </section>
            <div className="container">
                <section>
                    <WritingList sectionTitle="Recent Posts" />
                </section>
            </div>
        </Layout>
    )
}

export default Index