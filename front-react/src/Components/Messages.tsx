import {AppBar, Grid, Tab, Tabs} from "@material-ui/core";
import {useEffect, useState} from "react";
import TabPanel from "./TabPanel";
import ListMessages from "./ListMessages";
import PrivateMessages from "./PrivateMessages";
import {useUserMessages} from "../hooks/useUserMessages";


export default () => {
  const [tab, setTab] = useState(0);
  const messages = useUserMessages();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTab(newValue);
  };


  return (
    <Grid container>
      <AppBar position="static" color={"secondary"}>
        <Tabs value={tab} onChange={handleChange} aria-label="simple tabs example">
          <Tab style={{ margin: 'auto' }} label="Public Channel"  />
          <Tab style={{ margin: 'auto' }} label="Private Messages"/>
        </Tabs>
      </AppBar>
      <TabPanel value={tab} index={0}>
        <ListMessages />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <PrivateMessages />
      </TabPanel>
    </Grid>
  )
}

