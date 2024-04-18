import React, { Component } from 'react';

interface YearsProps {} // Interface for potential future props

class Years extends Component<YearsProps> {
  state = {
    count: 0,
    intervalId: null as number | null, // Type intervalId as number or null
  };

  componentDidMount() {
    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        if (this.state.count < 4) {
          this.setState({ count: this.state.count + 1 });
        } else {
          clearInterval(intervalId);
          this.setState({ intervalId: null });
        }
      }, 600); // Update every 1 second

      this.setState({ intervalId }); // Store interval ID in state
    }, 1500); // Simulate 1 second delay before starting

    return () => {
      clearTimeout(timeoutId);
      clearInterval(this.state.intervalId!); // Use non-null assertion
    };
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId!); // Use non-null assertion
  }

  render() {
    return (
      <div>
        <p className='text-xl' >with more than</p>
        <p className='text-5xl font-bold text-purple-700' style={{filter: 'drop-shadow(1px 1px 1px #5116a9)'}}> <span className='text-8xl font-bold'>{this.state.count}</span> <br/>years of</p>
        <p className='text-5xl font-bold text-purple-700' style={{filter: 'drop-shadow(1px 1px 1px #5116a9)'}}>experience</p>
      </div>
    );
  }
}

export default Years;
