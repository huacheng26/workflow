import React from 'react';
import { Router, Route, IndexRedirect, IndexRoute } from 'dva/router';
import Work from './routes/work/Work';
import Workmessage from './routes/work/Workmessage';
import Myfollow from './routes/work/Myfollow';
import Contacts from './routes/work/Contacts';
import Worklinks from './routes/worklink/Worklinks';
import Myworklink from './routes/worklink/Myworklink';
import Allworklink from './routes/worklink/Allworklink';
import Approves from './routes/approve/Approves';
import Myapprove from './routes/approve/Myapprove';
import Myapply from './routes/approve/Myapply';
import Mycopy from './routes/approve/Mycopy';
import Archived from './routes/approve/Archived';
import Delete from './routes/approve/Delete';
import Approveselect from './routes/approve/Approveselect';
import Exportlist from './routes/approve/Exportlist';
import Settype from './routes/approve/Settype';
import Setprocess from './routes/approve/Setprocess';
import Addapproveindex from './routes/approve/Addapproveindex';
import Addflow from './routes/approve/Addflow';
import App from './routes/App';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRedirect to="/work" />
        <Route path="work" component={Work} >
          <IndexRoute component={Workmessage} />
          <Route path="workmessage" component={Workmessage} />
          <Route path="myfollow" component={Myfollow} />
          <Route path="contact" component={Contacts} />
        </Route>
        <Route path="worklink" component={Worklinks} >
          <IndexRoute component={Myworklink} />
          <Route path="myworklink" component={Myworklink} />
          <Route path="allworklink" component={Allworklink} />
        </Route>
        <Route path="approve" component={Approves} >
          <IndexRoute component={Myapply} />
          <Route path="myapply" component={Myapply} />
          <Route path="myapprove" component={Myapprove} />
          <Route path="mycopy" component={Mycopy} />
          <Route path="archived" component={Archived} />
          <Route path="delete" component={Delete} />
          <Route path="approveselect" component={Approveselect} />
          <Route path="exportlist" component={Exportlist} />
          <Route path="settype" component={Settype} />
          <Route path="setprocess" component={Setprocess} />
          <Route path="addapproveindex" component={Addapproveindex} />
          <Route path="addflow" component={Addflow} />
        </Route>
      </Route>
    </Router>
  );
}

export default RouterConfig;
