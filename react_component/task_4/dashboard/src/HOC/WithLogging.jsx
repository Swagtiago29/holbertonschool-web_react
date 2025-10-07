function WithLogging(WrappedComponent) {
    return class extends React.Component {
        componentDidMount() {
            console.log(`Component ${} is mounted`)
        }
    }
}