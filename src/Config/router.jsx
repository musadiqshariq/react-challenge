import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Quiz from "../Screens/Quiz/quiz";

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Quiz} />
            </Switch>
        </Router>
    )
}

export default AppRouter;