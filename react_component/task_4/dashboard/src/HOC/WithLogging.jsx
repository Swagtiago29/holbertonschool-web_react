import React from 'react'

function WithLogging(WrappedComponent) {
    class WithLoggingHOC extends React.Component {
        componentDidMount() {
            const name = WrappedComponent.displayName || WrappedComponent.name || 'Component'
            console.log(`Component ${name} is mounted`)
        }

        componentWillUnmount() {
            const name = WrappedComponent.displayName || WrappedComponent.name || 'Component'
            console.log(`Component ${name} is going to unmount`)
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }
    // Set display name for debugging in React DevTools
    const name = WrappedComponent.displayName || WrappedComponent.name || 'Component'
    WithLoggingHOC.displayName = `WithLogging(${name})`

    return WithLoggingHOC
}
export default WithLogging