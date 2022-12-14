import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import { FormEvent, useState } from "react";
import styles from "../styles/Home.module.css";
import { Input, Button, Tag, Row, Col } from 'antd';

const Home: NextPage = () => {
  const [firstNumber, setFirstNumber] = useState<number>();
  const [secondNumber, setSecondNumber] = useState<number>();
  const [operation, setOperation] = useState<string>("");

  const [answer, setAnswer] = useState(0);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await axios.post("/api/calc2", {
      x: Number(firstNumber),
      op: operation,
      y: Number(secondNumber),
    });

    const ans = await res.data.answer;
    setAnswer(ans);
  };
  return (
    <div className={styles.container} >
      <Head>
        <title>Calculator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{border:'2px solid magenta', marginTop:'50px', backgroundColor:'#AB8BD6'}}>
      <main style={{margin:'10px auto 0px 680px ', width:'50%'}}>
        {/* form */}
        <form onSubmit={handleSubmit}>
          <div >
          <div>
            <Row >
              <Col span={18} pull={6} >
            <Tag color="magenta" style={{height:'30px', fontSize:'20px', width: '10rem', marginBottom: '10px' }}>First Nubmer</Tag>
            </Col>
            <Col span={6} pull={18}>
            <Input
              placeholder="00"
              type="text"
              id="first"
              value={firstNumber}
              onChange={(e: any) => setFirstNumber(e.target.value)} 
              style= {{backgroundColor:'#E8E3E2', border:'1px solid black' }}/>
              </Col>
              </Row>
          </div>
          

          {/* operations */}
          <div>
            <Row>
            <Col span={18} pull={6}>
            <Tag color="magenta" style={{height:'30px', fontSize:'20px', width: '10rem', marginBottom: '10px' }}>Operator</Tag>
            </Col>
            <Col span={6} pull={18}>
            <Input
              placeholder="+ or - or * or /"
              type="text"
              value={operation}
              onChange={(e: any) => setOperation(e.target.value)} 
              style= {{backgroundColor:'#E8E3E2', border:'1px solid black' }}/>
              </Col>
             </Row>
          </div>

          <div>
            <Row>
            <Col span={18} pull={6}>
            <Tag color="magenta" style={{height:'30px', fontSize:'20px', width: '10rem', marginBottom: '10px' }}>Second Nubmer</Tag>
            </Col>
            <Col span={6} pull={18}>
            <Input
              placeholder="00"
              type="text"
              id="second"
              value={secondNumber}
              onChange={(e: any) => setSecondNumber(e.target.value)} 
              style= {{backgroundColor:'#E8E3E2', border:'1px solid black' }}/>
              </Col>
              </Row>
          </div>
           {/* show Answer */}
          <Row>
            <Col span={18} pull={6}>
          <Tag color="magenta" style={{height:'30px', fontSize:'20px', width: '10rem' }}>
          Result
          </Tag>
          </Col>
          <Col span={6} pull={18}>
          <Tag color="green" style={{height:'30px', fontSize:'16px', width: '11.4rem', marginBottom: '10px', border:'1px solid black' }}>
          {answer ? <p>{answer}</p> : <p>0</p>}
          </Tag>
          </Col>
          </Row>

          {/* submit button */}
          <Row>
            <Col span={8} >
          <Button type="primary" htmlType="submit" 
          style={{marginBottom: '10px', height:'40px', fontSize:'18px', width: '11.5rem'}}>Submit</Button>
          </Col>
          </Row>
          </div>
        </form>
     </main>
     </div>
    </div>
  );
};

export default Home;
