import IndexNavbar from "../component/index/navbar.component";
import Footer from "../component/index/footer.component";
import Dashboard from "../component/authPage/dashboard.component";

const AuthView: React.FC = () => {
    return (
        <>
            <IndexNavbar />
            <div className="wrapper">
                <Dashboard />
                <Footer />
            </div>
        </>
    )
};

export default AuthView;
