// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Notes,
  Slide,
  Text,
  Image,
  CodePane,
  S,
  Table,
  TableBody,
  TableRow,
  TableItem,
  Link
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#2d6d6eff',
    secondary: 'white',
    tertiary: 'white',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        contentHeight={1000}
        contentWidth={1400}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={3} fit caps lineHeight={1} textColor="secondary">
            React Profiler

          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            simple tricks for optimising & debugging
          </Text>
          <Text margin="120px 0 0" textColor="tertiary" size={6} fit bold>
            Sebastian Szewczyk (@sebscode)
          </Text>
          <Image src='./swmansion.png' height={80}/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Agenda
          </Heading>
          <List>
            <ListItem margin="12px 0 0" bold textSize={32}>1. What is a React Profiler</ListItem>
            <ListItem margin="12px 0 0" bold textSize={32}>2. Why do you need that</ListItem>
            <ListItem margin="12px 0 0" bold textSize={32}>3. How to run it</ListItem>
            <ListItem margin="12px 0 0" bold textSize={32}>4. How to read it</ListItem>
            <ListItem margin="12px 0 0" bold textSize={32}>5. Real life example</ListItem>
            <ListItem margin="12px 0 0" bold textSize={32}>6. Bonus</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            What is a React Profiler
          </Heading>
          <List>
            <ListItem margin="12px 0 0" bold textSize={32}>React DevTools plugin</ListItem>
            <ListItem margin="12px 0 0" bold textSize={32}>Collects timing information about each component and how many times each component was rendered</ListItem>
            <ListItem margin="12px 0 0" bold textSize={32}>Shows which props/state changed in component</ListItem>
            <ListItem margin="12px 0 0" bold textSize={32}>Supported from react-dom 16.5+ (RN v0.57+)</ListItem>
            <ListItem margin="12px 0 0" bold textSize={32}>New version of profiler will be included in new React DevTools which is WIP</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Why do you need that #1
          </Heading>
          <List>
            <ListItem margin="12px 0 0" bold textSize={32}>1. One of your component is rerendering very often</ListItem>
            <ListItem margin="12px 0 0" bold textSize={32}>You don't know which component it is</ListItem>
            <ListItem margin="12px 0 0" bold textSize={32}>You do something similar in your code:</ListItem>
          </List>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem>
                  <CodePane
                    textSize={21}
                    lang="jsx"
                    source={require("./code/fourth_a.example")}
                  />
                </TableItem>
                <TableItem>
                  <CodePane
                    textSize={21}
                    lang="jsx"
                    source={require("./code/fourth_b.example")}
                  />
                </TableItem>
                <TableItem>
                  <CodePane
                    textSize={21}
                    lang="jsx"
                    source={require("./code/fourth_c.example")}
                  />
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Why do you need that #2
          </Heading>
          <List>
            <ListItem margin="12px 0 0" bold textSize={32}>2. Your application is taking long time to load</ListItem>
            <ListItem margin="12px 0 0" bold textSize={32}>You want to measure how much time it took to render</ListItem>
            <ListItem margin="12px 0 0" bold textSize={32}>You do something similar in your code:</ListItem>
          </List>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem>
                  <CodePane
                    textSize={21}
                    lang="jsx"
                    source={require("./code/fifth_a.example")}
                  />
                </TableItem>
                <TableItem>
                  <CodePane
                    textSize={21}
                    lang="jsx"
                    source={require("./code/fifth_b.example")}
                  />
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Why do you need that #3
          </Heading>
          <List>
            <ListItem margin="12px 0 0" bold textSize={32}>3. Your component has prop that quickly changes value</ListItem>
            <ListItem margin="12px 0 0" bold textSize={32}>You want to see that prop in each render call</ListItem>
            <ListItem margin="12px 0 0" bold textSize={32}>You do something similar in your code:</ListItem>
          </List>
          <CodePane
            textSize={21}
            lang="jsx"
            source={require("./code/sixth_a.example")}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Solution
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" size={1} fit bold>
            Just use React Profiler
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            How to run React Profiler
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" size={6} fit bold>
            DevTools will show a “Profiler  ” tab for applications that support the new profiling API:
          </Text>
          <Image src='./intro1.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            How to run React Profiler
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" size={6} fit bold>
            The “Profiler” panel will be empty initially. Click the record button to start profiling:
          </Text>
          <Image src='./intro2.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            How to run React Profiler
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" size={6} fit bold>
            Do some interactions on your app. When you finish, click the “Stop” button.
          </Text>
          <Image src='./intro3.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            How to run React Profiler in React Native
          </Heading>
          <Text margin="10px 0 0 80px" textColor="tertiary" textSize={26} textAlign="left" bold>
            You have to download additional tool
          </Text>
          <Text margin="10px 0 0 80px" textColor="tertiary" textSize={26} textAlign="left" bold>
            a) Standalone React Developer Tools (node package - react-devtools)
          </Text>
          <Text margin="10px 0 0 80px" textColor="tertiary" textSize={26} textAlign="left" bold>
            b) Standalone desktop app react-native-debugger (it includes above + gives even more, but you have to enable "Debug JS Remotely" from the Developer Menu)
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            How to read it - React Demo app
          </Heading>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem>
                <List>
                  <ListItem margin="12px 0 0" bold textSize={32}>Blank app created with create-react-app</ListItem>
                  <ListItem margin="12px 0 0" bold textSize={32}>Added few components with state {"{ counter: 0 }"}</ListItem>
                  <ListItem margin="12px 0 0" bold textSize={32}>Component1 changes counter each second</ListItem>
                  <ListItem margin="12px 0 0" bold textSize={32}>App and Component2 changes counter each 5 seconds</ListItem>
                  <ListItem margin="12px 0 0" bold textSize={32}>SmartComponent renders once</ListItem>
                  <ListItem margin="12px 0 0" bold textSize={32}>StupidComponent renders when parent renders</ListItem>
                </List>
                </TableItem>
                <TableItem>
                  <CodePane
                    textSize={24}
                    lang="jsx"
                    source={require("./code/first.example")}
                  />
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            How to read it - Flamegraph
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" textSize={32} bold>
            Basic screen of react profiler
          </Text>
          <Image src='./ex1s1d.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            How to read it - Flamegraph
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" textSize={32} bold>
            Bars represents components
          </Text>
          <Image src='./ex1s1d_2.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Notes>
            <p>React does work in two phases - render and commit.</p>
            <p>The commit phase is when React applies any change. (when React inserts, updates, and removes DOM nodes.)</p>
            <p>Current commit is colored black</p>
            <p>Let's click on some other commit</p>
          </Notes>
          <Heading size={5} textColor="secondary" caps>
            How to read it - Flamegraph
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" textSize={32} bold>
            Data is grouped into commits, selected commit colored black
          </Text>
          <Image src='./ex1s1d_3.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            How to read it - Flamegraph
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" textSize={32} bold>
          Data is grouped into commits, selected commit colored black
          </Text>
          <Image src='./ex1s3a.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            How to read it - Flamegraph
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" textSize={32} bold>
            Grey components were not rendered, only Component1 was rendered this commit
          </Text>
          <Image src='./ex1s3_2.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            How to read it - Flamegraph
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" textSize={32} bold>
            Data is grouped into commits, selected commit colored black
          </Text>
          <Image src='./ex1s4_2.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            How to read it - Flamegraph
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" textSize={32} bold>
            When we click on component we zoom it, and get information on right pane
          </Text>
          <Image src='./ex1s7.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            React app - Component Chart
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" textSize={32} bold>
            Double click on component will display component chart
          </Text>
          <Image src='./ex1s20.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            React app - Component Chart
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" textSize={32} bold>
            Here we can easily find informations related to specific component
          </Text>
          <Image src='./ex1s21.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            React app - Ranked Chart
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" textSize={32} bold>
            We can look at the components ordered by time it took to render them
          </Text>
          <Image src='./ex1s12.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            React app - Ranked Chart
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" textSize={32} bold>
            It's also grouped by commit
          </Text>
          <Image src='./ex1s14.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            React app - Profiler Filters
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" textSize={32} bold>
            You can show native elements and filter commits by time
          </Text>
          <Image src='./ex1s2a.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Real life problem detected
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" size={6} fit bold>
            React Native app with scrollable list took long time to render.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Recreating problem with sample app
          </Heading>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem>
                <List>
                  <ListItem margin="12px 0 0" bold textSize={32}>Blank app with expo init</ListItem>
                  <ListItem margin="12px 0 0" bold textSize={32}>Added FlatList - core component for rendering list of elements</ListItem>
                  <ListItem margin="12px 0 0" bold textSize={32}>FlatList contains 100 children</ListItem>
                  <ListItem margin="12px 0 0" bold textSize={32}>Child is a Text component</ListItem>
                </List>
                </TableItem>
                <TableItem>
                  <CodePane
                    textSize={26}
                    lang="jsx"
                    source={require("./code/second.example")}
                  />
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            React Native app - Flamegraph
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" textSize={32} bold>
            What we get in profiler
          </Text>
          <Image src='./e4s10.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            React Native app - Flamegraph
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" textSize={32} bold>
            Click on ScrollView to zoom it
          </Text>
          <Image src='./e4s11.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            React Native app - Flamegraph
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" textSize={32} bold>
            Second commit changes number of rendered children
          </Text>
          <Image src='./e4s12.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            React Native app - Flamegraph
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" textSize={32} bold>
            Third commit - number of rendered children changed
          </Text>
          <Image src='./e4s13.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            React Native app - Flamegraph
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" textSize={32} bold>
            On tenth commit we get all children rendered
          </Text>
          <Image src='./e4s14.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            React Native app - Flamegraph
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" textSize={32} bold>
            Let's go back to first commit, double click on Text Component
          </Text>
          <Image src='./e4s15.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            React Native app - Flamegraph
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" textSize={32} bold>
            Text Component rerendered in 10 commits
          </Text>
          <Image src='./e4s21.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Optimization technique - PureComponents
          </Heading>
          <List>
            <ListItem margin="12px 0 0" bold textSize={32}>Shallow compare of new and old pros and state</ListItem>
            <ListItem margin="12px 0 0" bold textSize={32}>Won’t rerender if nothing changes</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Recreating problem with sample app
          </Heading>

          <Table>
            <TableBody>
              <TableRow>
                <TableItem>
                <List>
                  <ListItem margin="12px 0 0" bold textSize={32}>Blank app with expo init</ListItem>
                  <ListItem margin="12px 0 0" bold textSize={32}>Added FlatList - component for rendering list of elements</ListItem>
                  <ListItem margin="12px 0 0" bold textSize={32}>FlatList contains 100 children</ListItem>
                  <ListItem margin="12px 0 0" bold textSize={32}><S type="strikethrough">Child is a Text component</S></ListItem>
                  <ListItem margin="12px 0 0" bold textSize={32}>Child is a SmartText component</ListItem>
                  <ListItem margin="12px 0 0" bold textSize={32}>SmartText is a PureComponent that renders Text</ListItem>
                </List>
                </TableItem>
                <TableItem>
                  <CodePane
                    textSize={26}
                    lang="jsx"
                    source={require("./code/third.example")}
                  />
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            React Native app - Flamegraph
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" textSize={32} bold>
            First commit, ScrollView has 10 children
          </Text>
          <Image src='./e5s11.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            React Native app - Flamegraph
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" textSize={32} bold>
            Second commit, first ten children grey (not rerendered)
          </Text>
          <Image src='./e5s12.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            React Native app - Flamegraph
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" textSize={32} bold>
            Third commit - only new children are rerendered
          </Text>
          <Image src='./e5s13.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            React Native app - Flamegraph
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" textSize={32} bold>
            Same applies to tenth commit
          </Text>
          <Image src='./e5s14.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            React Native app - Flamegraph
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" textSize={32} bold>
            Let's go back to first commit, double click on SmartText
          </Text>
          <Image src='./e5s15.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            React Native app - Flamegraph
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" textSize={32} bold>
            Rendered only once! Hooray!
          </Text>
          <Image src='./e5s17.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            React Native app - Flamegraph
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" textSize={32} bold>
            Keen eyes could ask - what about CellRenderer component
          </Text>
          <Image src='./e5s13b.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Notes>
            <p>CellRenderers render with each commit and it shouldn't</p>
            <p>Solution for that is more complex</p>
            <p>Don't have time here to explain</p>
            <p>I will try to present solution in other conference with more time</p>
          </Notes>
          <Heading size={5} textColor="secondary" caps>
            React Native app - Flamegraph
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" textSize={32} bold>
            They are inner components of VirtualizedList and were rendered each commit
          </Text>
          <Image src='./e5s14b.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Deep dive into React Native - FlatList
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" textSize={30} bold>
            FlatList renders VirtualizedList
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" textSize={30} bold>
            VirtualizedList renders ScrollView with CellRenderers children
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" textSize={30} bold>
            CellRenderer renders component supplied to FlatList as a renderItem props
          </Text>
          <Image src='./e5s11.png' height={600}/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Deep dive into React Native - FlatList
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" textSize={30} bold>
            Plan: Make CellRenderer PureComponent
          </Text>

          <Table>
            <TableBody>
              <TableRow>
                <TableItem padding="0 30px 0 0">
                  <Text margin="10px 0 0" textColor="tertiary" textSize={30} bold>
                    Before
                  </Text>
                  <CodePane
                    textSize={24}
                    lang="jsx"
                    source={require("./code/seventh_a.example")}
                  />
                </TableItem>
                <TableItem>
                  <Text margin="10px 0 0" textColor="tertiary" textSize={30} bold>
                    After
                  </Text>
                  <CodePane
                    textSize={24}
                    lang="jsx"
                    source={require("./code/seventh_b.example")}
                  />
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Deep dive into React Native - FlatList
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" textSize={30} bold>
            That's not enought, we still get unnecesarry rerenders
          </Text>
          <Image src='./e5s13b.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Deep dive into React Native - FlatList
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" textSize={30} bold>
            Compare props & state
          </Text>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem padding="0 30px 0 0">
                  <Text margin="10px 0 0" textColor="tertiary" textSize={30} bold>
                    1st commit
                  </Text>
                  <Image src='./rnck_1.png' height={700}/>
                </TableItem>
                <TableItem>
                  <Text margin="10px 0 0" textColor="tertiary" textSize={30} bold>
                    2nd commit
                  </Text>
                  <Image src='./rnck_2.png' height={700}/>
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Deep dive into React Native - FlatList
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" textSize={30} bold>
            Look at the CellRenderer invocation
          </Text>
          <CodePane
            textSize={20}
            lang="jsx"
            source={require("./code/eighth_c.example")}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Deep dive into React Native - FlatList
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" textSize={30} bold>
            Look at the CellRenderer invocation - new arrow function "onLayout" on each render
          </Text>
          <CodePane
            textSize={20}
            lang="jsx"
            source={require("./code/eighth_a.example")}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Deep dive into React Native - FlatList
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" textSize={30} bold>
            Look at invocation - after changes
          </Text>
          <CodePane
            textSize={20}
            lang="jsx"
            source={require("./code/eighth_b.example")}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Deep dive into React Native - FlatList
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" textSize={30} bold>
            CellRenderer changes
          </Text>
          <CodePane
            textSize={20}
            lang="jsx"
            source={require("./code/eighth_d.example")}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Notes>
            <p>For now - there is an open PR for that</p>
            <p>Look it up if you are interested</p>
          </Notes>
          <Heading size={5} textColor="secondary" caps>
            PR with fix to problem (thx to @christianbach)
          </Heading>
          <Image src='./gh.png' height={700}/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Bonus - New React DevTools & Profiler
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" textSize={32} bold>
            Get preview at <Link href="https://react-devtools-experimental.now.sh">
              https://react-devtools-experimental.now.sh
            </Link>
          </Text>
          <Text margin="20px 0 0" textColor="tertiary" textSize={32} bold>
            Get beta version <Link href="https://github.com/bvaughn/react-devtools-experimental">
              https://github.com/bvaughn/react-devtools-experimental
            </Link>
          </Text>
          <Text margin="20px 0 0" textColor="tertiary" textSize={32} bold>
            React Native support soon <Link href="https://github.com/bvaughn/react-devtools-experimental/pull/335">
              https://github.com/bvaughn/react-devtools-experimental/pull/335
            </Link>
          </Text>
          {/* https://react-devtools-experimental.now.sh/ */}
          {/* https://github.com/bvaughn/react-devtools-experimental/pull/335 */}
          {/* https://github.com/bvaughn/react-devtools-experimental */}
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            What's in new version
          </Heading>
          <List>
            <ListItem margin="12px 0 0" bold textSize={32}>Information why did component render (props/state/hook changed)</ListItem>
            <ListItem margin="12px 0 0" bold textSize={32}>Reload app and run profiler</ListItem>
            <ListItem margin="12px 0 0" bold textSize={32}>Owner tree (owner component is not always a parent component)</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Notes>
            <p>I'm sure that profiler could be used for more of such cases</p>
            <p>Thank you</p>
          </Notes>
          <Heading size={3} caps lineHeight={1} textColor="secondary">
            Thanks
          </Heading>
          <Text margin="120px 0 0" textColor="tertiary" bold>
            Sebastian Szewczyk (@sebscode)
          </Text>
          <Image src='./swmansion.png' height={80}/>
        </Slide>
      </Deck>
    );
  }
}
