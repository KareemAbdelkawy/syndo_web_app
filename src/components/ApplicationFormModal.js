import React, { useState } from "react";
import { Modal, Slider, Checkbox, Button, Form, Input } from "antd";
import { ShoppingOutlined, CreditCardOutlined } from "@ant-design/icons";

const ApplicationFormModal = ({ visible, onClose, phase, setPhase }) => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleNext = () => {
    if (phase === 1) {
      setPhase(2);
    } else {
      // Submit form logic here
    }
  };

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  const onFinish = (values) => {
    // onFinish logic here
  };

  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={null}
      width={1500}
      bodyStyle={{
        height: 540,
        display: "flex",
        backgroundColor: "black",
      }}
    >
      {/* Left section */}
      <div style={{ display: "flex", flexDirection: "column", width: 360 }}>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 140 }}
        >
          <ShoppingOutlined
            style={{
              color: phase === 1 ? "#00ACB1" : "white",
              fontSize: "32px",
            }}
          />
        </div>
        <div
          style={{
            color: "white",
            fontSize: 16,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Step one
        </div>
        <div
          style={{
            width: 60,
            height: 2,
            backgroundColor: "white",
            margin: "50px auto",
          }}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CreditCardOutlined
            style={{
              color: phase === 2 ? "#00ACB1" : "white",
              fontSize: "32px",
            }}
          />
        </div>
        <div
          style={{
            color: "white",
            fontSize: 16,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Step two
        </div>
      </div>
      {/* Middle section */}
      <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <div
          style={{
            color: "white",
            fontSize: 24,
            marginBottom: 50,
            marginTop: 50,
          }}
        >
          Application Form
        </div>
        <Form onFinish={onFinish} layout="vertical">
          {phase === 1 ? (
            <>
              <Form.Item
                name="fullName"
                rules={[{ required: true }]}
                style={{ width: "75%" }}
                label={
                  <span style={{ color: "white", fontWeight: "bold" }}>
                    Full Name<span style={{ color: "white" }}></span>
                  </span>
                }
              >
                <Input placeholder="Full Name" />
              </Form.Item>
              <Form.Item
                name="amount"
                rules={[{ required: true }]}
                style={{ width: "75%" }}
                label={
                  <span style={{ color: "white", fontWeight: "bold" }}>
                    Amount<span style={{ color: "white" }}></span>
                  </span>
                }
              >
                <Slider
                  min={0}
                  max={1000000}
                  step={1}
                  defaultValue={0}
                  onChange={handleSliderChange}
                  tooltipVisible={false}
                />
                <div style={{ position: "relative", marginTop: 20 }}>
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      zIndex: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{ color: "white", fontSize: 12, paddingTop: 12 }}
                    >
                      {sliderValue} EGP
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "white",
                    marginTop: 20,
                  }}
                >
                  <div>0 EGP</div>
                  <div>1,000,000 EGP</div>
                </div>
              </Form.Item>
              <Form.Item name="disclaimerChecked" valuePropName="checked">
                <Checkbox>I agree to the terms and conditions</Checkbox>
              </Form.Item>
            </>
          ) : (
            <>
              <div style={{ display: "flex", marginTop: "10px" }}>
                <Form.Item
                  name="cardHolderName"
                  rules={[{ required: true }]}
                  style={{ width: "45%", marginRight: "5%" }}
                  label={
                    <span style={{ color: "white", fontWeight: "bold" }}>
                      Card Holder Name<span style={{ color: "white" }}></span>
                    </span>
                  }
                >
                  <Input placeholder="Card Holder Name" />
                </Form.Item>
                <Form.Item
                  name="cardNumber"
                  rules={[{ required: true }]}
                  style={{ width: "45%" }}
                  label={
                    <span style={{ color: "white", fontWeight: "bold" }}>
                      Card Number<span style={{ color: "white" }}></span>
                    </span>
                  }
                >
                  <Input placeholder="Card Number" />
                </Form.Item>
              </div>
              <div style={{ display: "flex", marginTop: "50px" }}>
                <Form.Item
                  name="expiryDate"
                  rules={[{ required: true }]}
                  style={{ width: "45%", marginRight: "5%" }}
                  label={
                    <span style={{ color: "white", fontWeight: "bold" }}>
                      Expiry Date<span style={{ color: "white" }}></span>
                    </span>
                  }
                >
                  <Input placeholder="Expiry Date" />
                </Form.Item>
                <Form.Item
                  name="cvv"
                  rules={[{ required: true }]}
                  style={{ width: "45%" }}
                  label={
                    <span style={{ color: "white", fontWeight: "bold" }}>
                      CVV<span style={{ color: "white" }}></span>
                    </span>
                  }
                >
                  <Input placeholder="CVV" />
                </Form.Item>
              </div>
            </>
          )}
          <Button
            type="primary"
            htmlType="submit"
            style={{
              backgroundColor: "#00ACB1",
              color: "white",
              width: phase === 1 ? "75%" : "95%",
              marginTop: phase === 1 ? 0:'20px'
            }}
            onClick={handleNext}
          >
            {phase === 1 ? "Next" : "Submit"}
          </Button>
        </Form>
      </div>
      {/* Right section */}{" "}
      <div
        style={{
          backgroundImage: "./syndo.png",
          backgroundSize: "cover",
          backgroundPosition: "center",
          flexGrow: 1,
        }}
      ></div>
    </Modal>
  );
};

export default ApplicationFormModal;
