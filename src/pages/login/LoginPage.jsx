import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

const LoginPage = () => {
  return (
    <div
      className="container mx-auto w-100"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card className="col-md-4 py-4 px-3">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              Applikasi khusus PT LUMENESIA
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
