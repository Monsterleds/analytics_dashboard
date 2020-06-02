import React from 'react';

import { RiPriceTag3Line } from 'react-icons/ri';

import OptionsBar from '../../components/OptionsBar';

import {
  Container,
  Content,
  TitleContent,
  DataAnalysis,
  AnalysisContainer,
  ContentAnalysis,
  ContainerAnalysis,
} from './styles';

const Dashboard: React.FC = () => (
  <Container>
    <OptionsBar />
    <ContainerAnalysis>
      <Content>
        <TitleContent>
          <p>Sales Analysis</p>
          <select>
            <option>7d</option>
            <option>30d</option>
          </select>
        </TitleContent>
        <hr />
        <AnalysisContainer>
          <ContentAnalysis>
            <DataAnalysis>
              <div>
                <RiPriceTag3Line size={20} />
              </div>
              <h1>0</h1>
              <p>Total Sale Units</p>
            </DataAnalysis>
            <DataAnalysis>
              <div>
                <RiPriceTag3Line size={20} />
              </div>
              <h1>$0.00</h1>
              <p>Total Sale Units</p>
            </DataAnalysis>
            <DataAnalysis>
              <div>
                <RiPriceTag3Line size={20} />
              </div>
              <h1>$0.00</h1>
              <p>Total Sale Units</p>
            </DataAnalysis>
          </ContentAnalysis>
          <ContentAnalysis>
            <DataAnalysis>
              <div>
                <RiPriceTag3Line size={20} />
              </div>
              <h1>0</h1>
              <p>Total Sale Units</p>
            </DataAnalysis>
            <DataAnalysis>
              <div>
                <RiPriceTag3Line size={20} />
              </div>
              <h1>$0.00</h1>
              <p>Total Sale Units</p>
            </DataAnalysis>
            <DataAnalysis>
              <div>
                <RiPriceTag3Line size={20} />
              </div>
              <h1>$0.00</h1>
              <p>Total Sale Units</p>
            </DataAnalysis>
          </ContentAnalysis>
        </AnalysisContainer>
      </Content>

      <Content>
        <TitleContent>
          <p>Inventory Analysis</p>
          <select>
            <option>7d</option>
            <option>30d</option>
          </select>
        </TitleContent>
        <hr />
        <AnalysisContainer>
          <ContentAnalysis>
            <DataAnalysis>
              <div>
                <RiPriceTag3Line size={20} />
              </div>
              <h1>0</h1>
              <p>Total Sale Units</p>
            </DataAnalysis>
            <DataAnalysis>
              <div>
                <RiPriceTag3Line size={20} />
              </div>
              <h1>$0.00</h1>
              <p>Total Sale Units</p>
            </DataAnalysis>
            <DataAnalysis>
              <div>
                <RiPriceTag3Line size={20} />
              </div>
              <h1>$0.00</h1>
              <p>Total Sale Units</p>
            </DataAnalysis>
          </ContentAnalysis>
          <ContentAnalysis>
            <DataAnalysis>
              <div>
                <RiPriceTag3Line size={20} />
              </div>
              <h1>0</h1>
              <p>Total Sale Units</p>
            </DataAnalysis>
            <DataAnalysis>
              <div>
                <RiPriceTag3Line size={20} />
              </div>
              <h1>$0.00</h1>
              <p>Total Sale Units</p>
            </DataAnalysis>
            <DataAnalysis>
              <div>
                <RiPriceTag3Line size={20} />
              </div>
              <h1>$0.00</h1>
              <p>Total Sale Units</p>
            </DataAnalysis>
          </ContentAnalysis>
        </AnalysisContainer>
      </Content>
    </ContainerAnalysis>
  </Container>
);

export default Dashboard;
