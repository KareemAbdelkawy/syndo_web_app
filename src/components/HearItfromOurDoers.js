import React, { useState } from "react";
import { Card, Col, Row, Typography, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./../../src/App.css";

const { Title } = Typography;

const HearItfromOurDoers = () => {
  const [currentPage, setCurrentPage] = useState(1); // state for pagination

  const doers = [
    {
      id: 1,
      name: "John Doe",
      company: "ABC Company",
      position: "Software Engineer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      name: "Jane Doe",
      company: "XYZ Corporation",
      position: "Marketing Manager",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      name: "Bob Smith",
      company: "123 Industries",
      position: "Product Manager",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "https://via.placeholder.com/200",
    },
    {
      id: 4,
      name: "Alice Johnson",
      company: "456 Ventures",
      position: "Data Scientist",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      imageUrl: "https://via.placeholder.com/200",
    },
    {
      id: 5,
      name: "Charlie Brown",
      company: "789 Enterprises",
      position: "Sales Manager",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageUrl: "https://via.placeholder.com/200",
    },
    {
      id: 6,
      name: "Eve Adams",
      company: "DEF Co.",
      position: "UX Designer",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      imageUrl: "https://via.placeholder.com/200",
    },
    {
      id: 7,
      name: "David Lee",
      company: "GHI Corp",
      position: "CEO",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula mi vel quam sagittis pharetra.",
      imageUrl: "https://via.placeholder.com/200",
    },
    {
      id: 8,
      name: "Maria Rodriguez",
      company: "JKL Ltd",
      position: "Financial Analyst",
      text: "Duis ac risus condimentum, maximus sapien quis, varius tellus. Proin bibendum tortor et orci ultrices, id sollicitudin felis varius.",
      imageUrl: "https://via.placeholder.com/200",
    },
    {
      id: 9,
      name: "Tom Jackson",
      company: "MNO Inc",
      position: "Project Manager",
      text: "Praesent pharetra, enim sit amet sodales hendrerit, metus elit. Pellentesque malesuada velit nec nibh mattis, id fermentum massa malesuada. ",
      imageUrl: "https://via.placeholder.com/200",
    },
  ];

  // pagination functions
  const onNextPage = () => setCurrentPage((prev) => prev + 1);
  const onPrevPage = () => setCurrentPage((prev) => prev - 1);

  const startIndex = (currentPage - 1) * 3;
  const endIndex = startIndex + 3;

  return (
    <div className="hear-it-container">
      <div className="hear-it-header">
        <Title level={2} style={{ color: "white", fontSize: "50px" }}>
          Hear It from Our Doers
        </Title>
        <div className="pagination-container">
          <Button
            type="text"
            icon={<LeftOutlined />}
            onClick={onPrevPage}
            disabled={currentPage === 1}
            style={{ color: "black", backgroundColor: "#00ACB1" }} // pagination color
          />
          <Button
            type="text"
            icon={<RightOutlined />}
            onClick={onNextPage}
            disabled={endIndex >= doers.length}
            style={{ color: "black", backgroundColor: "#00ACB1" }} // pagination color
          />
        </div>
      </div>
      <Row gutter={[74, 0]}>
        {doers.slice(startIndex, endIndex).map((doer) => (
          <Col span={8} key={doer.id}>
            <Card hoverable className="doer-card">
              <div className="doer-info">
                <div className="doer-image-container">
                  <img alt={doer.name} src={doer.imageUrl} />
                  <div
                    className="doer-name-container"
                    style={{ backgroundColor: "black" }}
                  >
                    <div className="doer-name">
                      <span>{doer.name}</span>
                      <br />
                      <span style={{fontSize:"12px"}}>{doer.company} , {doer.position}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="doer-text">{doer.text}</div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HearItfromOurDoers;
