// Dynanic Rendering of View Project Details Page
document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get("id");
    const projects = {
        "Hospitality Domain Revenue Insights": {
            title: "Hospitality Domain Revenue Insights",

            frameSrc: "https://app.powerbi.com/reportEmbed?reportId=ac230e5b-df24-445e-a87c-515f408d1048&autoAuth=true&ctid=afab14ca-ab60-42a6-8a29-ff101424f318&navContentPaneEnabled=false&filterPaneEnabled=false",

            about: `<p>In today’s competitive hospitality industry, data-driven decision-making is essential for maintaining market leadership and maximizing revenue.<br>
                        This project focuses on a Revenue Insights Dashboard developed in Power BI for Atliq Grands, a luxury hotel chain facing market share and revenue decline.<br>
                        By analyzing historical data, the dashboard provides key performance indicators (KPIs) such as occupancy rates, average daily rates (ADR), revenue per available room (RevPAR), and competitor benchmarking.<br>
                        These insights empower the management team to:
                        <ul>
                            <li>Identify revenue trends and customer booking patterns</li>
                            <li>Understand competitive positioning in the luxury/business hotel segment</li>
                            <li>Optimize pricing strategies to improve profitability</li>
                            <li>Enhance operational efficiency through data-driven forecasting</li>
                        </ul>
                        This project showcases how business intelligence and data analytics play a pivotal role in strategic decision-making, enabling hospitality brands to regain market share and sustain revenue growth.
                    </p>`,

            solution: `<p>A comprehensive data analysis was conducted to evaluate key performance metrics such as Revenue Per Available Room (RevPAR), Occupancy Percentage (OCC%), Total Revenue, Average Daily Rate (ADR), and Realization Rate. 
                          A structured dashboard design was implemented using Power BI, incorporating filters and interactive elements to facilitate intuitive exploration. 
                          Additional insights beyond the predefined metrics were generated to uncover hidden trends and optimize decision-making.
                      </p>`,

            dataProcess: `
                          <h3>Data Sources</h3>
                          <p>Historical hotel performance data, including booking records, occupancy rates, and financial metrics.</p>

                          <h3>Development Process</h3>
                          
                          <p><strong>1. Data Preparation:</strong> Cleaning, transforming, and validating historical data for accuracy.</p>

                          <p><strong>2. Metric Calculation:</strong> Computing KPIs such as <strong>RevPAR</strong>, <strong>ADR</strong>, <strong>Realization</strong>, <strong>DSRN</strong> and <strong>OCC%</strong> to assess hotel performance.</p>

                          <p><strong>3. Dashboard Implementation:</strong> Designing a user-friendly, interactive <strong>Power BI</strong> dashboard with filters and navigation for seamless exploration.</p>

                          <p><strong>4. Insights Generation:</strong> Identifying revenue trends, occupancy patterns, and areas for optimization to support data-driven decision-making.</p>`,

            insights: `<p>Based on the historical data analysis, the revenue management dashboard provided the following key insights:</p>
                      <ul>
                      <li><b>Booking Platform Performance:</b> Logtrip had the highest <b>Realization % (70.59%)</b>, while Tripster had the lowest <b>(69.83%)</b>, indicating a marginal but notable difference in conversion efficiency across platforms.</li><br>
                      <li><b>ADR vs. Realization % Discrepancy:</b> The largest divergence between <b>Average Daily Rate (ADR) and Realization %</b> was observed in <b>Direct Offline bookings</b>, where ADR peaked at <b>$1,279,046 — 50% higher than the Realization %</b>, highlighting a potential gap in revenue optimization for direct offline channels.</li><br>
                      <li><b>Platform-Wide Revenue Insights:</b> Across all <b>seven booking platforms, Realization % ranged from 69.83% to 70.59%</b>, while <b>ADR fluctuated between 12,633.71 and 12,791.17</b>, underscoring the need for platform-specific pricing and revenue strategies.</li><br>
                      <li><b>Luxury vs. Business Segment Revenue:</b> The <b>Luxury segment generated $1,052,751,932 in revenue</b>, significantly outperforming the <b>Business segment ($656,019,297)</b>, accounting for <b>61.61% of total revenue</b>, indicating a strong market preference for premium offerings.</li><br>
                      <li><b>Strategic Revenue Growth Opportunity:</b> Given the luxury segment’s dominance, <b>enhancing premium offerings, optimizing high-value bookings, and refining pricing strategies</b> could further solidify Atliq Grands’ market position and drive revenue growth.</li>
                      </ul>
                      <p>These insights provide <b>actionable recommendations</b> for revenue optimization, strategic pricing, and platform-specific improvements, enabling Atliq Grands to regain market share in the luxury/business hotel sector.</p>
                      `,

            recommendations: `<p>Based on the insights from the historical data, the following actions are recommended: </p>
                                  <h3>1. Optimize Platform-Specific Pricing Strategies</h3>
                                  <ul>
                                      <li><strong>Adjust Pricing Models:</strong> Since realization percentages vary across booking platforms (Logtrip: 70.59%, Tripster: 69.83%), Atliq Grands should analyze commission structures, customer acquisition costs, and pricing elasticity per platform.</li>
                                      <li><strong>Incentivize High-Performing Platforms:</strong> Offer exclusive discounts or loyalty incentives for customers booking through platforms with a higher realization rate (e.g., Logtrip) to increase direct revenue share.</li>
                                      <li><strong>Performance-Based Commission Adjustments:</strong> Renegotiate commission rates with lower-performing platforms (Tripster) to improve margin efficiency and boost conversion rates.</li>
                                  </ul>
                                
                                <h3>2. Address Revenue Gaps in Direct Offline Bookings</h3>
                                <ul>
                                    <li><strong>Enhance Direct Booking Incentives:</strong> With a significant ADR ($1,279,046) but a lower realization percentage, Atliq Grands should provide special offers, exclusive perks, and bundled deals to encourage direct offline bookings.</li>
                                    <li><strong>Invest in Personalized Customer Outreach:</strong> Implement data-driven retargeting and loyalty programs to drive repeat direct bookings and increase conversion rates.</li>
                                    <li><strong>Streamline Offline Sales Processes:</strong> Optimize sales training and CRM strategies to ensure sales teams convert high-ADR offline leads more effectively.</li>
                                </ul>
                                
                                <h3>3. Leverage Data for Platform-Wide Revenue Growth</h3>
                                <ul>
                                    <li><strong>Dynamic Pricing Implementation:</strong> Utilize machine learning-based pricing models to adjust ADR dynamically based on platform demand fluctuations (ranging from $12,633.71 to $12,791.17).</li>
                                    <li><strong>Realization Rate-Based Discounts:</strong> Offer time-sensitive promotions to improve realization percentages on platforms with lower conversion efficiency.</li>
                                    <li><strong>Optimize Booking Experience:</strong> Improve UI/UX on third-party platforms by collaborating with vendors to reduce drop-offs and cart abandonments.</li>
                                </ul>
                                
                                <h3>4. Strengthen High-Value Luxury Offerings</h3>
                                <ul>
                                    <li><strong>Enhance Luxury Guest Experience:</strong> Given that 61.61% of total revenue comes from the luxury segment, Atliq Grands should elevate premium guest experiences through exclusive services like personalized concierge, high-end amenities, and luxury partnerships.</li>
                                    <li><strong>Segment-Specific Marketing:</strong> Implement targeted digital campaigns emphasizing exclusivity and VIP experiences to attract high-net-worth individuals.</li>
                                    <li><strong>Expand Premium Room Categories:</strong> Introduce new ultra-luxury room tiers or experiential packages that cater to affluent travelers.</li>
                                </ul>
                                
                                <h3>5. Implement Data-Driven Revenue Growth Strategies</h3>
                                <ul>
                                    <li><strong>Revenue Performance Analytics:</strong> Continuously monitor realization percentages and ADR trends per platform using advanced analytics dashboards.</li>
                                    <li><strong>Customer Segmentation Strategy:</strong> Develop predictive models to identify high-value customers and tailor pricing and promotions accordingly.</li>
                                    <li><strong>Competitive Benchmarking:</strong> Conduct regular market research to adjust pricing and services in line with competitors’ luxury offerings.</li>
                                </ul>`
        },

        "Supplier Quality and Performance Analysis": {
            title: "Supplier Quality and Performance Analysis",

            frameSrc: "https://app.powerbi.com/reportEmbed?reportId=98c94ff7-2c6c-401c-bb02-069cb6286ba5&autoAuth=true&ctid=afab14ca-ab60-42a6-8a29-ff101424f318&navContentPaneEnabled=false&filterPaneEnabled=false",

            about: `<p>
                      Innova Manufacturing Ltd, a leading manufacturer, faced significant challenges in managing supplier quality and performance due to a lack of a centralized procurement system. 
                      Without a structured approach to assessing supplier reliability, the company struggled with inconsistent vendor performance, defective materials, and production downtime. 
                      Recognizing the need for a data-driven solution, the program management team consolidated supplier and defect-related data across multiple plants. 
                      The objective of this project was to analyze supplier quality, identify the key contributors to material defects and downtime, 
                      and provide actionable insights to optimize supply chain decisions and improve overall manufacturing efficiency.
                    </p>`,

            solution: `
                      <p>To address Innova's challenges, a structured data analysis approach was adopted, leveraging Power BI for data visualization and business intelligence reporting. 
                        The solution was implemented in the following phases:</p>
                        <h3>1. Data Cleaning & Integration</h3>
                          <ul>
                              <li>Collected data from multiple plants, consolidating information on materials, vendors, defects, and downtime.</li>
                              <li>Ensured data accuracy and consistency by standardizing vendor and material records.</li>
                          </ul>

                          <h3>2. Exploratory Data Analysis (EDA)</h3>
                          <ul>
                              <li>Analyzed defect rates and downtime associated with each vendor and plant.</li>
                              <li>Investigated material performance across different suppliers to identify recurring quality issues.</li>
                          </ul>

                          <h3>3. Key Performance Indicator (KPI) Development</h3>
                          <ul>
                              <li>Established KPIs such as defect count per vendor, downtime minutes per plant, and material failure rates.</li>
                              <li>Identified underperforming vendors and materials that contributed most to defects and downtime.</li>
                          </ul>

                          <h3>4. Data Visualization & Dashboard Development</h3>
                          <ul>
                              <li>Designed interactive Power BI dashboards to present supplier performance insights.</li>
                              <li>Provided drill-down capabilities for stakeholders to analyze vendor performance across plants.</li>
                          </ul>

                          <h3>5. Insight Generation</h3>
                          <ul>
                              <li>Identified vendors and plants causing the greatest defect quantity and downtime.</li>
                              <li>Highlighted specific vendor-material combinations leading to poor performance.</li>
                          </ul>`,

            dataProcess: `
                          <h3>Data Sources</h3>
                            <ul>
                                <li><strong>Historical Supplier Data:</strong> Records of vendors supplying raw materials, including material types and associated costs.</li>
                                <li><strong>Defect Reports:</strong> Number and type of material defects reported across different manufacturing plants.</li>
                                <li><strong>Downtime Logs:</strong> Data capturing minutes of production downtime caused by defective materials.</li>
                                <li><strong>Procurement Records:</strong> Information on vendor transactions, order quantities, and material deliveries.</li>
                            </ul>

                            <h3>Development Process</h3>
                            <ol>
                                <li><strong>Data Collection & Transformation:</strong> Gathered, cleaned, and structured supplier, defect, and downtime data for analysis.</li>
                                <li><strong>Analytical Model Building:</strong> Leveraged Power BI Business Intelligence tool to develop calculations to assess defect rates, downtime impact, and supplier consistency.</li>
                                <li><strong>Visualization & Reporting:</strong> Created dynamic Power BI dashboards for assessing supplier performance.</li>
                            </ol> `,

            insights: `
                      <p>This report presents key insights from the analysis of supplier quality and performance for Innova Manufacturing Ltd. 
                      The objective is to identify trends in defect quantities, downtime hours, and supplier, plant, and material performance to optimize the company's supply chain and manufacturing processes. 
                      The analysis covers data from 2018 and 2019, highlighting key weaknesses, opportunities, and areas of concern.</p>

                       <h3>Key Findings</h3>

                        <h3>1. Defect Trends</h3>
                        <ul>
                            <li>Total Defect Quantity increased by 23.32% from 2018 (1,163,615,190) to 2019 (1,435,019,274).</li>
                            <li>October 2019 accounted for 8.64% of total defects, indicating a seasonal pattern or process inefficiency.</li>
                            <li>Raw Materials had the highest defect rate (770,580,317), representing 29.65% of all defects, while Printed Materials had the lowest (223,112).</li>
                        </ul>

                        <h3>2. Downtime Impact</h3>
                        <ul>
                            <li>Total Downtime Hours increased by 23.44% from 2018 (96,580.68) to 2019 (119,229.23).</li>
                            <li>October 2019 had the highest share of downtime (8.93%).</li>
                            <li>Raw Materials caused the highest downtime (65,918.17 hours), making up 30.54% of all downtime.</li>
                            <li>October had the highest downtime cost per hour ($292,034.33), which was 190.93% higher than the lowest month (July, $100,378.50).</li>
                        </ul>

                        <h3>3. Vendor Performance</h3>
                        <ul>
                            <li><strong>Defect Quantity:</strong></li>
                            <ul>
                                <li>Top contributor: Yombu (15,136,374 defects, 14.53% higher than Edgeblab).</li>
                                <li>Lowest contributor: Edgeblab (13,215,947 defects).</li>
                                <li>Among bottom 10 vendors, Mymm had the highest defects (3,917,630), 17.43% higher than Dablist (3,336,056).</li>
                            </ul>
                            <li><strong>Downtime Impact:</strong></li>
                            <ul>
                                <li>Avamm had the highest downtime (1,164.82 hours), 9.42% higher than Reallinks (1,064.55 hours).</li>
                                <li>Among bottom 10 vendors, Jatri had the highest downtime (309.02 hours), 28.87% higher than Tagfeed (239.78 hours).</li>
                            </ul>
                        </ul>

                        <h3>4. Plant Performance</h3>
                        <ul>
                            <li><strong>Defect Quantity:</strong></li>
                            <ul>
                                <li>Hingham had the highest defects (100,174,656), 12.97% higher than Ripton (88,672,748).</li>
                                <li>Among the bottom 10 plants, June Lake had the highest defects (83,170,353), 23.96% higher than Middletown (67,096,796).</li>
                            </ul>
                            <li><strong>Downtime Hours:</strong></li>
                            <ul>
                                <li>Riverside had the highest downtime (8,597.85 hours), 16.31% higher than Barling (7,392.45 hours).</li>
                                <li>Among the bottom 10 plants, Savannah had the highest downtime (6,975.17 hours), 15.39% higher than Reading (6,044.72 hours).</li>
                            </ul>
                        </ul>

                      <h3>SWOT Analysis</h3>
                      <h3>1. Strengths</h3>
                      <ul>
                        <li>Centralized data collection from multiple plants enables company-wide performance tracking.</li>
                        <li>Identification of key vendors and plants contributing to defects and downtime.</li>
                        <li>Visibility into cost-impacting downtime trends.</li>
                      </ul>

                      <h3>2. Weaknesses</h3>
                      <ul>
                        <li>Lack of a standardized procurement system leads to inconsistent supplier performance monitoring.</li>
                        <li>High defect rates from specific vendors and materials impacting production efficiency.</li>
                        <li>Significant increase in downtime from 2018 to 2019.</li>
                      </ul>

                      <h3>3. Opportunities</h3>
                      <ul>
                        <li>Implementing a vendor quality scoring system to standardize supplier evaluation.</li>
                        <li>Refining material selection based on defect trends.</li>
                        <li>Process optimization to reduce seasonal defect spikes.</li>
                      </ul>
                
                      <h3>4. Threats</h3>
                      <ul>
                        <li>Continued defects and downtime may impact production costs and delivery timelines.</li>
                        <li>Vendor inconsistency leading to supply chain inefficiencies.</li>
                        <li>Lack of immediate corrective action could result in financial and reputational risks.</li>
                      </ul>
                   `,

            recommendations: `
                      <p>The following are industry-specific, actionable recommendations tailored to optimize Innova Manufacturing Ltd's supply chain and manufacturing processes based on the key insights and SWOT analysis.</p>
                      <h3>1. Supplier Performance Optimization</h3>
                      <ul>
                          <li>Implement a <strong>Vendor Quality Scoring System</strong> to assess supplier performance, categorize vendors, and enforce improvement plans.</li>
                          <li>Prioritize sourcing from low-defect vendors and introduce <strong>predictive analytics</strong> to assess material failure risks.</li>
                      </ul>
                      
                      <h3>2. Downtime Reduction Strategies</h3>
                      <ul>
                          <li>Conduct <strong>root cause analysis</strong> on peak downtime periods, implement preventive maintenance, and establish a contingency inventory strategy.</li>
                          <li>Enforce supplier accountability by linking <strong>downtime penalties</strong> to contracts and securing backup suppliers.</li>
                      </ul>
                      
                      <h3>3. Manufacturing Process Improvement</h3>
                      <ul>
                          <li>Adopt <strong>lean manufacturing</strong> to streamline operations, standardize procedures, and train operators on defect prevention.</li>
                          <li>Implement <strong>predictive maintenance</strong> schedules and plans at high-downtime plants to anticipate failures and reduce disruptions.</li>
                      </ul>
                      
                      <h3>4. Supply Chain Standardization & Risk Mitigation</h3>
                      <ul>
                          <li>Develop a <strong>centralized procurement system</strong> for supplier evaluations and real-time monitoring.</li>
                          <li>Reduce reliance on high-defect suppliers and adopt <strong>dual-sourcing strategies</strong> to ensure supply chain stability.</li>
                      </ul>
                      
                      <h3>5. Continuous Improvement & Performance Monitoring</h3>
                      <ul>
                          <li>Deploy <strong>real-time data analysis</strong> and visualization dashboards for monitoring defects, supplier performance, and downtime.</li>
                          <li>Conduct <strong>quarterly performance reviews</strong> with suppliers and plant managers to drive ongoing improvements.</li>
                      </ul>
                      
                      <p><strong>By adopting these strategies, Innova Manufacturing Ltd can enhance supplier quality, minimize downtime, and optimize manufacturing efficiency.</strong></p>
            `
        },

    "Product Sales and Performance Analysis": {
            title: "Product Sales and Performance Analysis",

            frameSrc: "https://app.powerbi.com/reportEmbed?reportId=a9149746-55ad-4e3a-b7e1-35c32c566d18&autoAuth=true&ctid=afab14ca-ab60-42a6-8a29-ff101424f318&navContentPaneEnabled=false&filterPaneEnabled=false",

            about: `<p>
                      The Product Sales and Performance Analysis project aimed to provide actionable insights into sales trends, revenue performance, 
                      and sales effectiveness within the product marketing and sales industry. By leveraging Power BI dashboards, the analysis evaluated total revenue, budget alignment, product group performance, 
                      sales channels, and salesperson rankings, offering data-driven recommendations to optimize business strategies.
                      This project underscores the power of data-driven insights in shaping marketing and sales strategies, 
                      helping businesses maximize revenue potential and enhance overall performance.
                    </p>
                    <h3>Project Objectives:</h3>
                    <ol>
                      <li>Identify <strong>revenue growth trends</strong> and key budget fluctuations to improve financial planning.</li>
                      <li>Highlight <strong>top-performing products</strong> and underperforming categories to refine product strategy.</li>
                      <li>Analyze <strong>sales channels</strong> to pinpoint revenue-driving opportunities, with a focus on e-commerce expansion.</li>
                      <li>Rank <strong>salesperson performance</strong>, revealing best practices to enhance sales effectiveness.</li>
                      <li>Provide <strong>strategic recommendations</strong> to drive profitability, optimize sales operations, and align decision-making with business goals.</li>
                    </ol>
                    `,

            solution: `
                      <p>
                        The Product Sales and Performance Analysis Report was developed using Power BI, leveraging filters and page navigation for an intuitive and user-friendly design. 
                        The process began with data extraction, cleaning, and structuring to ensure accuracy. 
                        A Sales Dashboard was created to analyze revenue trends, budget alignment, product performance, and sales channel contributions, 
                        while a Performance Dashboard ranked salespersons based on revenue and order volume. 
                        Key insights were derived to optimize sales strategies, refine budgeting, and enhance channel effectiveness, providing actionable recommendations for business growth.
                      </p>
                      `,

            dataProcess: `
                          <p>The analysis was conducted using aggregated sales transactions data recorded between <strong>January 2019 and January 2021</strong>. The dataset includes:</p>
                          <ul>
                              <li>Sales revenue</li>
                              <li>Order volumes</li>
                              <li>Budget forecasts</li>
                              <li>Product categories</li>
                              <li>Sales channels</li>
                              <li>Individual salesperson performance</li>
                          </ul>
                          <h3>Data Sources</h3>
                            <p>The primary data sources used for this analysis include:</p>
                                <ul>
                                  <li><strong>Enterprise Resource Planning (ERP) System:</strong> Recorded sales transactions, product performance, and order details.</li>
                                  <li><strong>Customer Relationship Management (CRM) System:</strong> Captured sales interactions and revenue contributions by salespersons.</li>
                                  <li><strong>Financial Budgeting Reports:</strong> Provided sales budget allocations and variance tracking.</li>
                                </ul>

                            <h3>Development Process</h3>
                            <p>The structured data was integrated into <strong>Power BI</strong>, enabling dynamic visualizations and trend analysis. Key focus areas included:</p>
                              <ul>
                                  <li>Tracking <strong>revenue growth</strong> and identifying trends.</li>
                                  <li>Analyzing <strong>budget alignment</strong> by comparing planned vs. actual revenue.</li>
                                  <li>Assessing <strong>product performance</strong> to highlight top-selling and underperforming categories.</li>
                                  <li>Evaluating <strong>sales channels</strong> and their contribution to overall revenue.</li>
                                  <li>Ranking <strong>salesperson performance</strong> based on revenue generation.</li>
                              </ul> `,

            insights: `
                      <h3>Executive Summary</h3>
                      <p>
                        This report presents key findings from two Power BI dashboards analyzing sales performance from <strong>January 2019 to January 2021</strong>. 
                        The <strong>Sales Dashboard</strong> focuses on <strong>total revenue, orders, and Average Ticket Price (ATP)</strong> while benchmarking revenue against budget, product groups, sales channels, and product categories. 
                        The <strong>Performance Dashboard</strong> evaluates sales effectiveness, ranking salespersons by revenue contribution.
                      </p>
                      <h3>1. Revenue and Budget Trends</h3>
                        <ul>
                            <li><strong>Unexpected Low Budget:</strong> January 2019's sales budget was only $264,763.33, well below the expected range of $319,835.31 – $1,431,150.76.</li>
                            <li><strong>Consistent Budget Growth:</strong> Over five quarters, the budget increased by 31.09% ($587,352.68), with the steepest rise occurring between July 2019 and October 2020 (+$587,352.67).</li>
                            <li><strong>Sustained Revenue Growth:</strong> Revenue steadily increased over two years, with its longest period of growth spanning from January 2019 to January 2021 (+$609,867.26).</li>
                        </ul>
                      <h3>2. Revenue Distribution by Product Group</h3>
                        <ul>
                            <li><strong>Top Performer:</strong> Wheat Flour generated the highest revenue at $4,473,241, followed by Oil ($2,890,488) and Yeasts ($2,201,022).</li>
                            <li><strong>Lowest Performer:</strong> Tomato Sauce recorded the least revenue, bringing in only $1,933 over the two-year period.</li>
                        </ul>
                      <h3>3. Sales Performance by Channel</h3>
                        <ul>
                            <li><strong>Retail Channel Leads:</strong> Retail contributed the most revenue, generating $8,697,067 (48.56%).</li>
                            <li><strong>Distributor Channel:</strong> Accounted for $6,098,516 (34.05%) of total revenue.</li>
                            <li><strong>Online Sales Lagging:</strong> The Online channel contributed only $3,113,650 (17.39%).</li>
                        </ul>
                      <h3>4. Orders by Product Category</h3>
                        <ul>
                            <li><strong>Food Category Dominance:</strong> The Food category accounted for 90.21% of total orders (47,414 orders).</li>
                            <li><strong>Drink Category:</strong> Had significantly fewer orders, making up only 9.79% (5,146 orders).</li>
                        </ul>
                      <h3>5. Sales Performance by Salesperson</h3>
                        <ul>
                            <li><strong>Top 3 Salespersons:</strong> Carla Ferreira ($4,707,403), Julio Lima ($3,301,482), and Gustavo Gomes ($2,447,136) collectively contributed 58.4% of total revenue.</li>
                            <li><strong>Leading Salesperson:</strong> Carla Ferreira led sales performance with $4,707,403 in revenue and 9,570 orders.</li>
                        </ul>
                   `,

            recommendations: `
                      <p>The following are actionable recommendations based on product sales and performance analysis to help optimize sales strategies, refine budgeting, 
                          and enhance channel effectiveness.</p>
                      <ul>
                        <li><strong>Enhance Budget Accuracy:</strong> Improve forecasting models to align planned allocations with actual revenue trends, minimizing budget variances.</li>
                        <li><strong>Maximize Peak Sales Cycles:</strong> Increase marketing and promotional efforts during high-growth periods to capture more revenue.</li>
                        <li><strong>Optimize Product Portfolio:</strong> Assess demand and profitability of underperforming products (e.g., Tomato Sauce) to determine whether to reposition or discontinue them.</li>
                        <li><strong>Boost Sales Through Bundling:</strong> Leverage cross-selling strategies by pairing high-revenue products with lower-performing ones to drive sales growth.</li>
                        <li><strong>Expand Digital Sales Channels:</strong> Strengthen e-commerce and digital marketing efforts to capture shifting consumer purchasing behaviors.</li>
                        <li><strong>Drive Bulk Sales Consistency:</strong> Implement targeted promotions for distributors to ensure a steady flow of high-volume orders.</li>
                        <li><strong>Strengthen Beverage Category Sales:</strong> Enhance marketing for drink products through bundled promotions or expanded product offerings.</li>
                        <li><strong>Scale Top Sales Strategies:</strong> Identify and replicate high-performing sales tactics across the sales team to boost overall performance.</li>
                        <li><strong>Motivate & Retain Talent:</strong> Introduce performance-based incentives to drive sales engagement and reward top performers.</li>
                      </ul>
            `
        },

      "E-commerce Platform Performance Analysis": {
            title: "E-commerce Platform Performance Analysis",

            frameSrc: "/assets/documents/Ecommerce_Performance_Analysis_using_SQL_Portfolio.pdf",

            about: `
                    <p>
                      Olist, a leading Brazilian e-commerce platform, connects small businesses with larger marketplaces, enabling entrepreneurs to expand their customer reach. 
                      This project analyzes Olist’s platform performance to uncover key trends in sales, customer behavior, and vendor activity. 
                      By leveraging data-driven insights, we aim to enhance customer acquisition, retention, and overall profitability.
                    </p>
                    `,

            solution: `
                      <p>
                        To assess Olist’s e-commerce performance, we analyzed critical Key Performance Indicators (KPIs), including <strong>total revenue, order volume, average order value, customer retention, and seller activity</strong>. 
                        We conducted a comprehensive breakdown of product sales by <strong>category, payment preferences</strong>, and <strong>geographical distribution</strong>. 
                        Our analysis also explored factors influencing customer rating and loyalty, profitability, and sales trends over time.
                      </p>
                      <h3>Key Performance Indicators (KPIs) Covered:</h3>
                      <ul>
                        <li><strong>Total Sales Revenue:</strong> Measure the overall income generated from product sales to assess business growth and market demand.</li>
                        <li><strong>Number of Orders:</strong> Track the volume of transactions to understand customer purchasing behavior and sales trends.</li>
                        <li><strong>Average Order Value (AOV):</strong> Calculate the average amount spent per transaction to identify opportunities for upselling and cross-selling.</li>
                        <li><strong>Product Sales Performance:</strong> Track product sales by order volume and revenue generated for top-performing products for each year, quarter and month.</li>
                        <li><strong>Active Sellers:</strong> Analyze the number of sellers/vendors who use the platform more than once for the period of the analysis.</li>
                        <li><strong>Payment Type Usage:</strong> Identify the most used or preferred payment type by customers for transactions.</li>
                        <li><strong>Profit Margin %:</strong> Measure the profitability of products concerning sales on the platform.</li>
                        <li><strong>Customer Retention Rate:</strong>Customer Retention Rate: Measure the percentage of repeat customers to understand and improve customer loyalty.</li>
                      </ul>
                      `,

            dataProcess: `
                          <p>
                            We utilized the <strong>Brazilian E-Commerce Public Dataset by Olist</strong>, which contains over <strong>98,000 orders from 2016 to 2018</strong>. 
                            The dataset covers various dimensions, such as <strong>order details, payment methods, customer demographics, and product categories</strong>. 
                            The analysis involved <strong>importing data to create an ER diagram</strong> to visually show the relationship between the various tables, <strong>data cleaning, feature engineering, and visualization</strong> to create a clear picture of platform performance. 
                            SQL was used for data extraction, transformation and analysis, while Power BI was leveraged for dynamic reporting.</br>
                            The dataset can be found and downloaded using this link on <a href="https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce" target="_blank">Kaggle</a>.</br>
                            The SQL queries for the data processing can be found by clicking <a href="https://github.com/GameliKofiJerome/Olist-E-Commerce-Data-Analysis-Using-SQL-Power-BI/blob/main/olist_data_processing.sql" target="_blank">Here</a>.</br>
                            All SQL queries for undertaking the analysis can be accessed by clicking <a href="https://github.com/GameliKofiJerome/Olist-E-Commerce-Data-Analysis-Using-SQL-Power-BI/blob/main/olist_data_analysis.sql" target="_blank">Here</a>.</br>
                            The Power BI report can be viewed by clicking on this <a href="https://app.powerbi.com/groups/me/reports/f943c773-3821-4240-8b91-13039244a4f6?ctid=afab14ca-ab60-42a6-8a29-ff101424f318&pbi_source=linkShare" target="_blank">Dashboard Link</a>.
                          </p>
                          `,

            insights: `
                      <p>The following are key insights gathered from the performance analysis of Olist's platform:</p>
                      <ul>
                        <li><strong>Revenue Growth:</strong> Olist generated <strong>R$15.4 million</strong> in revenue between 2016 and 2018, with <strong>consistent sales growth</strong> over time.</li>
                        <li><strong>Top-Selling Categories:</strong> <strong>Bed & Bath, Health & Beauty, and Sports & Leisure</strong> were among the best-performing product categories.</li>
                        <li><strong>Customer Retention Challenges:</strong> Only <strong>5.67% of total revenue</strong> came from repeat purchases, indicating opportunities for retention improvement.</li>
                        <li><strong>Payment Preference:</strong> Credit cards were the dominant payment method, used in <strong>73.49%</strong> of transactions.</li>
                        <li><strong>Geographical Trends:</strong> São Paulo had the highest customer density, but <strong>Acre recorded the highest retention rate (9.88%)</strong>, highlighting potential regional engagement strategies.</li>
                        <li><strong>Profitability vs. Order Volume:</strong> <strong>Computer Accessories</strong> had the highest profit margin <strong>(30.82%)</strong>, despite not having the most orders</li>
                      </ul>
                   `,

            recommendations: `
                              <p>
                                The following recommendations provide an actionable roadmap for improving Olist’s platform performance, 
                                fostering sustainable growth and competitiveness in Brazil’s evolving e-commerce landscape.
                              </p>
                              <ul>
                                <li><strong>Enhance Customer Retention:</strong> Implement <strong>personalized marketing campaigns, loyalty programs, and post-purchase engagement strategies</strong> to boost repeat purchases.</li>
                                <li><strong>Optimize Product Assortment:</strong> Focus on <strong>high-margin products</strong>, such as computer accessories, while improving visibility and promotions for top-selling categories.</li>
                                <li><strong>Payment Flexibility:</strong> Expand <strong>installment-based payment options</strong> to cater to a broader customer base and implement discounts to encourage higher-order volumes.</li>
                                <li><strong>Seller Performance Support:</strong> Provide <strong>sales insights, training, and targeted promotions</strong> to enhance vendor success on the platform.</li>
                                <li><strong>Localized Marketing:</strong> Invest in <strong>region-specific campaigns</strong>, especially in high-retention areas, to strengthen customer loyalty.</li>
                              </ul>
                              `
        },

    "Customer Segmentation and Analysis": {
            title: "From Data to Strategy: Customer Segmentation in Online Retail",

            frameSrc: "https://nbviewer.org/github/GameliKofiJerome/Customer-Segmentation-and-Analysis/blob/main/Customer%20Segmentation%20Analysis%20-%20K-Means%20Clustering%20and%20RFM%20Analysis.ipynb",

            about: `
                    <p>
                      <strong>Customer segmentation</strong> is a crucial strategy in the e-commerce and retail industry, enabling businesses to identify and group customers based on purchasing behavior, engagement and other key metrics. 
                      This project utilized Python data libraries—<strong>Pandas, NumPy, and Plotly</strong>—along with the <strong>K-Means Clustering algorithm</strong> to analyze over <strong>500,000</strong> customer transaction data. 
                      By segmenting customers based on <strong>RFM (Recency, Frequency, Monetary)</strong> metrics into identify distinct groups, the aim is to enable the client, 
                      owners of an online retail store implement effective <strong>data-driven customer centric marketing strategies to optimize customer engagement and retention, and improve revenue generation</strong>.
                    </p>
                    `,

            solution: `
                      <p>The analysis was conducted in <strong>three (3)</strong> stages:</p>
                      <h3><strong>1. Data Wrangling</strong></h3>
                      <ul>
                        <li>Loaded raw customer transaction data into a pandas DataFrame</li>
                        <li>Cleaned the dataset by handling missing values, removing duplicates,correcting data types and formatting data values.etc</li>
                        <li>Created new customer transaction features (e.g., transaction type, total amount).</li>
                      </ul>
                      <p>Click on this link to access the steps/processes undertaken at this stage &rarr;
                        <a href="https://nbviewer.org/github/GameliKofiJerome/Customer-Segmentation-and-Analysis/blob/main/Customer%20Segmentation%20Analysis%20-%20Data%20Wrangling%20%28Cleaning%20%26%20Preparation%29.ipynb" target="_blank">
                                Data Wrangling (Cleaning and Preparation)
                        </a>
                      </p>

                      <h3><strong>2. Exploratory Data Analysis (EDA)</strong></h3>
                      <ul>
                        <li>Performed descriptive statistics and used visualizations highlight key aspects of the dataset.</li>
                        <li>Used Plotly to generate insightful and interactive visualizations (pie charts, bar charts and area charts).</li>
                        <li>Identified trends in transaction types, transaction trends and customer distributions.</li>
                      </ul>
                      <p>Click on this link to access the steps/processes undertaken at this stage &rarr;
                        <a href="https://nbviewer.org/github/GameliKofiJerome/Customer-Segmentation-and-Analysis/blob/main/Customer%20Segmentation%20Analysis%20-%20Exploratory%20Data%20Analysis.ipynb" target="_blank">
                                Exploratory Data Analysis (EDA)
                        </a>
                      </p>

                      <h3><strong>3. RFM Analysis & Customer Segmentation</strong></h3>
                      <ul>
                        <li>Conducted Recency, Frequency, and Monetary (RFM) analysis to categorize customers based on:</li>
                          <ul>
                            <li><strong>Recency</strong> (How recently they made a purchase)</li>
                            <li><strong>Frequency</strong> (How often they purchase)</li>
                          <li><strong>Monetary Value</strong> (How much they spend)</li>
                        </ul>
                      </ul>
                      <ul>
                        <li>Used <strong>K-Means Clustering</strong> to segment customers into distinct groups (e.g., High-Value Customers, Average-Value Customers, Low-Value Customers).</li>
                        <li>Evaluated optimal cluster count using the <strong>Elbow Method</strong></li>
                      </ul>
                      <p>Click on this link to access the steps/processes undertaken at this stage &rarr;
                        <a href="https://nbviewer.org/github/GameliKofiJerome/Customer-Segmentation-and-Analysis/blob/main/Customer%20Segmentation%20Analysis%20-%20K-Means%20Clustering%20and%20RFM%20Analysis.ipynb" target="_blank">
                                RFM (Recency, Frequency, Monetary) Analysis & Customer Segmentation
                        </a>
                      </p>
                      `,

            dataProcess: `
                          <p>
                            The dataset used for this project encompasses a diverse array of more than 500K transactions, capturing the interactions of customers on the online retail platform. 
                            Features such as transaction dates, purchase amounts, and customer identifiers form the foundation for a comprehensive exploration of customer dynamics. 
                            The following is a description of the columns that make up the dataset. For each data record, there are 8 variables
                          </p>
                          <ol>
                            <li><strong>InvoiceNo:</strong> This is a 6-digit integer number, uniquely assigned to each transaction. If the code starts with a 'C', it indicates a cancelled transaction.</li>
                            <li><strong>stockCode:</strong> This is a 5-digit integer number uniquely assigned to a distinct product on the online retail store.</li>
                            <li><strong>Description:</strong> Product(item) name.</li>
                            <li><strong>Quantity:</strong> The count or quantities of each product(item) per transaction.</li>
                            <li><strong>InvoiceDate:</strong> Invoice date and time. Day and time when each transaction was generated.</li>
                            <li><strong>UnitPrice:</strong> Product price per unit in pound sterling.</li>
                            <li><strong>CustomerID:</strong> 5-digit number uniquely assigned to each customer.</li>
                            <li><strong>Country:</strong> Country where each customer resides.</li>
                          </ol>
                          <p>As outlined in the solution approach the project analysis was done in <strong>three(3)<strong> stages:</p>
                          <ul>
                            <li>Data Wrangling (Cleaning and Preparation)</li>
                            <li>Exploratory Data Analysis (EDA)</li>
                            <li>RFM (Recency, Frequency, Monetary) Analysis & Customer Segmentation</li>
                          </ul>
                          `,

            insights: `
                      <p>
                        This report summarizes the <strong>most significant findings</strong> from the <strong>Exploratory Data Analysis (EDA)</strong> and 
                        <strong>RFM (Recency, Frequency, Monetary) Analysis</strong> stages of the <strong>Customer Segmentation and Analysis Project</strong> undertaken for management and key stakeholders of the online retail store. 
                        The insights below highlight transaction trends, customer purchasing behavior, and actionable takeaways for key stakeholders.
                      </p>

                      <h3>Key Insights from Exploratory Data Analysis (EDA)</h3>
                      <ol>
                        <li><strong>Transaction Types and Sales Performance</strong></li>
                          <ul>
                            <li>Sales transactions accounted for 94.9% of total transactions, accumulating £8.74 million in revenue.</li>
                            <li>Cancelled transactions were minimal (5.12%), but still resulted in £471,742.31 in lost revenue.</li>
                          </ul>

                        <li><strong>Monthly & Yearly Sales Trends</strong></li>
                          <ul>
                            <li>November 2011 recorded the highest sales (£1.137 million), showing a seasonal increase in demand.</li>
                            <li>Sales dipped in February and April 2011, highlighting potential seasonal slowdowns.</li>
                            <li>December 2010 had better sales performance than December 2011, suggesting market changes or competition effects.</li>
                          </ul>

                        <li><strong>Sales and Cancellations by Country</strong></li>
                          <ul>
                            <li>United Kingdom had the highest sales volume and revenue (£7.2 million, ~348,800 transactions).</li>
                            <li>Germany and France followed as key markets, while Saudi Arabia had the lowest sales (£145.92).</li>
                            <li>Cancelled transactions were highest in the UK (£440,301.34), followed by Germany and Ireland.</li>
                            <li>Least cancellations occurred in Saudi Arabia and the EU, suggesting higher transaction reliability in those regions.</li>
                          </ul>

                        <li><strong>Customer Buying Patterns by Time of Day</strong></li>
                          <ul>
                            <li>Mornings saw the highest sales across most months in 2011, with October recording the highest morning sales (£144,624.77).</li>
                            <li>Afternoon sales peaked in August, November, and December, indicating possible work-break shopping habits.</li>
                            <li>Evening sales were consistently lower across all months, suggesting limited consumer engagement at night.</li>
                          </ul>

                        <li><strong>Top and Bottom Performing Countries by Customer Count</strong></li>
                          <ul>
                            <li>UK had the highest customer base (3,943 customers), reinforcing its dominance as the primary market.</li>
                            <li>Austria had the lowest customer count among the top 10 countries.</li>
                            <li>Bahrain had the highest customer count among the lowest-ranked countries, while Czech Republic, Lithuania, Lebanon, and Singapore had only 1 customer each.</li>
                          </ul>
                      </ol>

                       <h3>Key Insights from RFM Analysis (Customer Segmentation)</h3>
                      <ol>
                        <li><strong>Customer Segments by Value</strong></li>
                          <ul>
                            <li>Average-Value Customers were the largest segment, making up 74.2% (3,239 customers).</li>
                            <li>Low-Value Customers accounted for 25.4% (1,108 customers).</li>
                            <li>High-Value Customers were the smallest but most important segment, representing only 0.37% (16 customers).</li>
                          </ul>

                        <li><strong>Recency (Last Purchase Date) Trends</strong></li>
                          <ul>
                            <li>High-Value Customers had the most recent transactions, with an average recency of 410 days.</li>
                            <li>Low-Value Customers had the longest recency period, averaging 271,673 days, indicating a large number of inactive customers.</li>
                          </ul>

                        <li><strong>Frequency (Purchase Repetition) Patterns</strong></li>
                          <ul>
                            <li>Average-Value Customers had the highest transaction frequency (18,325 orders), showing regular engagement.</li>
                            <li>High-Value Customers had a lower frequency (1,433 orders) but contributed significantly to revenue.</li>
                            <li>Low-Value Customers had the lowest frequency (2,030 orders), indicating one-time or infrequent buyers.</li>
                          </ul>

                        <li><strong>Monetary Value Analysis</strong></li>
                          <ul>
                            <li>Average-Value Customers generated the highest revenue (£6.49 million).</li>
                            <li>High-Value Customers contributed £2.07 million, despite their smaller size.</li>
                            <li>Low-Value Customers contributed only £639,774, highlighting their limited impact on revenue.</li>
                          </ul>

                        <li><strong>Relationship Between Frequency & Monetary Value</strong></li>
                          <ul>
                            <li>Higher purchase frequency did not always translate into higher spending.</li>
                            <li>High-Value Customers had fewer transactions but significantly higher spending per order.</li>
                            <li>Average-Value Customers had the widest range of spending, from £0 to £67,387 per transaction.</li>
                          </ul>

                        <li><strong>Relationship Between Recency & Monetary Value</strong></li>
                          <ul>
                            <li>Most High-Value Customers made recent purchases (0-325 days) and had the highest spending per visit.</li>
                            <li>Most Average-Value Customers transacted within 0-162 days, with a spending peak of £67,387.</li>
                            <li>Low-Value Customers had the longest inactivity periods, with low spending except for a few outliers.</li>
                          </ul>
                      </ol>
                   `,

            recommendations: `
                              <p>From the Key Insights drawn for the analysis, the following are actionable recommendations for business decision making.</p>
                              <ol>
                                <li><strong>Customer Retention & Loyalty Programs</strong></li>
                                  <ul>
                                    <li>Implement loyalty programs and targeted discounts to convert Average-Value Customers into High-Value Customers.</li>
                                    <li>Introduce personalized email campaigns and exclusive offers for customers with high recency but low frequency to boost repeat purchases.</li>
                                  </ul>

                                <li><strong>Optimizing Sales by Time and Season</strong></li>
                                  <ul>
                                    <li>Leverage high-performing months like November and December with increased promotions and ad spend.</li>
                                    <li>Target morning and afternoon shoppers with limited-time discounts, as these periods generate the most sales.</li>
                                    <li>Explore ways to increase evening sales engagement, such as special night-time discounts or limited-time offers.</li>
                                  </ul>

                                <li><strong>Improving Market Penetration in High-Growth Countries</strong></li>
                                  <ul>
                                    <li>Strengthen marketing efforts in top-performing countries (UK, Germany, France) with localized promotions.</li>
                                    <li>Investigate reasons for high cancellations in the UK and Germany to improve checkout reliability and reduce cart abandonment.</li>
                                    <li>Expand brand awareness in low-engagement regions (Saudi Arabia, Czech Republic, Lithuania) through geo-targeted ads.</li>
                                  </ul>

                                <li><strong>Data-Driven Customer Segmentation & Marketing Strategy</strong></li>
                                  <ul>
                                    <li>Use RFM-based segmentation to create customized marketing campaigns:</li>
                                      <ul>
                                        <li><strong>High-Value Customers:</strong> Exclusive VIP perks & early product access.</li>
                                        <li><strong>Average-Value Customers:</strong> Reward programs & personalized recommendations.</li>
                                        <li><strong>Low-Value Customers:</strong> Re-engagement campaigns & first-time purchase incentives.</li>
                                      </ul>
                                    <li>Optimize cross-selling & upselling strategies for high-frequency, low-monetary customers to increase their purchase value.</li>
                                    <li>Monitor and adjust pricing strategies based on high-performing products in specific segments and markets.</li>
                                  </ul>
                              </ol>

                            <h3>Conclusion</h3>
                            <p>
                              The <strong>Customer Segmentation and Analysis</strong> provides critical insights into sales performance, transaction behaviors, and customer engagement trends. 
                              By implementing <strong>data-driven retention strategies, optimizing marketing efforts, and improving sales forecasting</strong>, the company can <strong>increase revenue, 
                              reduce customer churn, and enhance long-term customer relationships</strong>.
                            </p>
                              `
        },

      "Customer Churn and Prediction Analysis": {
            title: "Customer Churn and Prediction Analysis",

            frameSrc: "https://app.powerbi.com/reportEmbed?reportId=15d87674-9761-4b68-ace5-3e13005bdfc0&autoAuth=true&ctid=afab14ca-ab60-42a6-8a29-ff101424f318&navContentPaneEnabled=false&filterPaneEnabled=false",

            about: `<p>
                      This project focuses on reducing customer churn in the telecom industry by combining data engineering, business intelligence, and machine learning to deliver a full-scale, data-driven solution. 
                      It integrates a robust ETL pipeline in SQL Server, insightful Power BI dashboards, and a predictive Random Forest model to identify at-risk customers and uncover churn patterns. 
                      By transforming complex data into clear, actionable insights, the project empowers stakeholders to make smarter decisions and implement targeted retention strategies. 
                      Its innovative approach not only enhances customer loyalty but also holds the potential to significantly boost revenue and operational efficiency.
                    </p>`,

            solution: `
                      <p>The following structured approach was taken to solve the business challenge of identifying and reducing customer churn. 
                        The solution was designed to be scalable, insightful, and actionable—supporting both analytical needs and strategic decision-making.
                      </p>
                        <h3>1. Data Acquisition and Preparation (ETL Process – SQL Server)</h3>
                          <ul>
                              <li>Extracted raw customer data from source systems into a centralized SQL Server environment.</li>
                              <li>Transformed the data by cleaning inconsistencies, handling missing values, and formatting columns for consistency.</li>
                              <li>Loaded the refined data into a customer table and created SQL views to support different levels of analysis (demographic, geographic, account, and service).</li>
                          </ul>

                          <h3>2. Data Exploration and Modeling (Power BI)</h3>
                          <ul>
                              <li>Imported cleaned data into Power BI.</li>
                              <li>Wrote DAX measures to track KPIs and churn metrics.</li>
                              <li>Designed an interactive dashboard to monitor:</li>
                              <ul>
                                <li>Total customers, churn, churn rate, and new joiners</li>
                                <li>Regional and demographic churn patterns</li>
                                <li>Subscription behavior across different services</li>
                              </ul>
                          </ul>

                          <h3>3. Churn Prediction Modeling (Python – Random Forest Classifier)</h3>
                          <ul>
                              <li>Selected the Random Forest algorithm due to its robustness, interpretability, and ability to handle feature interactions.</li>
                              <li>Preprocessed data by encoding categorical variables and splitting into training and test sets.</li>
                              <li>Trained the model on churn data and evaluated using accuracy, precision, recall, and confusion matrix.</li>
                              <li>Performed feature importance analysis to identify the top drivers of churn (e.g., tenure, contract type, monthly charges).</li>
                          </ul>`,

            dataProcess: `
                          <h4>1. Data Source:</h4>
                          <p>
                            The dataset used in this analysis was sourced from a telecommunications service provider and consists of customer records capturing various attributes relevant to churn analysis. 
                            The data includes:
                          </p>
                          <ul>
                              <li><strong>Demographic Information: </strong>Gender, age group, senior citizen status, and partner/dependents.</li>
                              <li><strong>Geographic Attributes: </strong>Customer location details such as state or region.</li>
                              <li><strong>Account and Payment Details: </strong>Tenure, contract type, monthly and total charges, payment methods.</li>
                              <li><strong>Service Usage:</strong> Subscriptions to internet, phone, streaming services, technical support, and more.</li>
                              <li><strong>Churn Label:</strong> Indicates whether a customer has churned or remained with the service.</li>
                          </ul>
                          <p>
                            This rich, multi-dimensional dataset provides a holistic view of customer behavior and service interaction, essential for understanding and predicting churn.
                          </p>

                            <h4>2. Development Process:</h4>
                            <p>
                              The development process was broken down into three structured phases:
                            </p>
                            <ol type="A">
                                <li><strong>Data Extraction, Transformation, and Loading (ETL – SQL Server)</strong></li>
                                  <ul>
                                    <li>Extracted and imported raw CSV data into a SQL Server database.</li>
                                    <li>Cleaned data by handling nulls, correcting inconsistencies, and converting data types.</li>
                                    <li>Created SQL table and views to organize customer data into logical entities (e.g., churned customers, new joiners).</li>
                                    <li>Normalized the structure to enable scalable querying and integration into BI and ML tools.</li>
                                  </ul></br>
                                <li><strong>Metrics Creation and Visualization (Power BI)</strong></li>
                                  <ul>
                                    <li>Imported SQL table and views into Power BI Desktop to build an efficient data model.</li>
                                    <li>Created Metrics using DAX to track key trends across data points (demographic, geographic, payment and account info, and services).li>
                                    <li>Developed interactive dashboards to explore:</li>
                                      <ul>
                                        <li>Total customers, churn rate, and service usage</li>
                                        <li>Churn trends across geography, demographics, and services</li>
                                        <li>Time-based patterns in customer acquisition and loss</li>
                                      </ul>
                                  </ul></br>
                                <li><strong>Predictive Modeling (Python – Random Forest Classifier)</strong></li>
                                  <ul>
                                    <li>Preprocessed the data: categorical encoding, feature scaling, and data splitting.</li>
                                    <li>Trained a Random Forest Classifier using features such as tenure, service subscriptions, and contract type.</li>
                                    <li>Evaluated performance with metrics including accuracy, precision, recall, and feature importance.</li>
                                  </ul>
                                  <p>Click on this link to view Predictive Modeling using Random Forest Classifier &rarr;
                                      <a href="https://nbviewer.org/github/GameliKofiJerome/customer-churn-and-prediction-analysis/blob/main/churn_prediction.ipynb" target="_blank">
                                              Churn Predictive Modeling
                                      </a>
                                  </p>
                            </ol> `,

            insights: `
                      <h3>Executive Summary:</h3>
                      <p>
                        Out of <strong>6,418 total customers</strong>, <strong>1,732 churned</strong> – resulting in a <strong>high churn rate of 27.0%</strong>. Female customers represented a majority of churn, 
                        with the <strong>36–50 age group consistently leading churn across demographics</strong>. A critical churn window was identified in the <strong>6–12 month tenure range</strong>. 
                        Low monthly charges are associated with lower churn rates.
                      </p>

                       <h3>Key Findings:</h3>

                        <h4>1. Churn Hotspots by Tenure</h4>
                        <ul>
                            <li><strong>Tenure group 6–12 months</strong> saw the highest churn divergence across most segments.</li>
                            <li>Customers in this tenure group are <strong>most vulnerable to churn</strong>, regardless of gender, age, or spending tier.</li>
                        </ul>

                        <h4>2. Demographic Drivers of Churn</h4>
                        <ul>
                            <li><strong>Females accounted for 64.1%</strong> of all churned customers (1,111 vs 621).</li>
                            <li>The <strong>36–50 age group</strong> consistently leads in churn across all charge tiers and marital statuses.</li>
                        </ul>

                        <h4>3. Impact of Monthly Charges on Churn</h4>
                            <ul>
                                <li>Customers paying <strong>less than $20/month had the lowest churn</strong> rates (as low as 9.9%)</li>
                                <li><strong>Churn rate rises significantly with monthly charges</strong> >$50, peaking at 34.4% in the $50–$100 range</li>
                            </ul>

                        <h4>4. Marital Status Correlation</h4>
                        <ul>
                            <li>Churn rates were consistently higher among <strong>unmarried customers</strong>.</li>
                            <li>Both married and unmarried females had <strong>significantly higher churn than their male counterparts</strong>.</li>
                        </ul>

                      <h4>5. Churn Prediction Model Alignment</h4>
                      <ul>
                        <li>Model flagged <strong>381 likely churners:</strong> 248 females and 133 males.</li>
                        <li>Top predicted churn demographic: <strong>Females aged 36–50</strong> (34% of predictions)</li>
                        <li>Predictions align with actual churn patterns – <strong>validating model reliability.</strong></li>
                      </ul>
                      
                      <h3>Business Implications:</h3>
                      <ol>
                        <li><strong>Customer Lifetime Value at Risk:</strong> Mid-tenure churn threatens ROI on acquisition costs.</li>
                        <li><strong>Brand Perception:</strong> High churn among females may reflect perceived service gaps – opportunities exist to enhance customer experience.</li>
                        <li><strong>Revenue Loss Concentration:</strong> Churn is concentrated among higher-paying customers, representing significant revenue leakage.</li>
                      </ol>
                   `,

            recommendations: `
                      <p>The following are industry-tailored, actionable recommendations focused on empowering stakeholders take data-driven decisions to reduce customer churn.</p>
                      <table>
                        <thead>
                          <tr>
                            <th>Priority</th>
                            <th>Initiative</th>
                            <th>Impact</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>High</td>
                            <td><strong>First-Year Engagement Program</strong> targeting customers in months 6–12 with onboarding, tutorials, and retention offers</td>
                            <td>Reduce early-stage churn</td>
                          </tr>
                          <tr>
                            <td>Medium</td>
                            <td><strong>Female-Centric Campaigns</strong> (36–50 age group), focusing on convenience, support, and loyalty</td>
                            <td>Target high-risk demographic</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td><strong>Pricing Review</strong> for $50+ tiers – introduce value packs, loyalty points, or tiered perks</td>
                            <td>Improve satisfaction & retention in high-value customers</td>
                          </tr>
                          <tr>
                            <td>Low</td>
                            <td><strong>Lifestyle-Based Retention</strong> for Unmarried customers, possibly bundling services or personalized benefits</td>
                            <td>Enhance engagement with high-churn segment</td>
                          </tr>
                        </tbody>
                      </table>
                     `
        }
        // Add more projects here
    };
    
    if (projects[projectId]) {
        document.getElementById("project-title").textContent = projects[projectId].title;
        document.getElementById("project-frame").src = projects[projectId].frameSrc;
        document.getElementById("about-project").innerHTML = projects[projectId].about;
        document.getElementById("solution-approach").innerHTML = projects[projectId].solution;
        document.getElementById("data-process").innerHTML = projects[projectId].dataProcess;
        document.getElementById("key-insights").innerHTML = projects[projectId].insights;
        document.getElementById("recommendations").innerHTML = projects[projectId].recommendations;
    } else {
        document.querySelector(".container").innerHTML = "<h1>Project not found</h1><a href='portfolio.html' class='btn'>Back to Portfolio</a>";
    }
  });
