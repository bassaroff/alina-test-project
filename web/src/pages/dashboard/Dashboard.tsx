import {Col, PageWrapper, Row} from "@/shared/ui";
import {Bar, Bubble, CurrencyChart} from "@/features/dashboard";

const Dashboard = () => {
    return (
        <PageWrapper>
            <Row>
               <Col col={12} colSm={12}>
                   <div style={{ height: 300 }}>
                       <CurrencyChart />
                   </div>
               </Col>
               <Col col={5} colSm={12}>
                   <div style={{ height: 200 }}>
                       <Bar />
                   </div>
               </Col>
               <Col col={7} colSm={12}>
                   <div style={{ height: 200 }}>
                       <Bubble />
                   </div>
               </Col>
            </Row>
        </PageWrapper>
    )
}

export default Dashboard;