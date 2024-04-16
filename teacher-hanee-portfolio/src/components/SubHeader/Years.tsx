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
        if (this.state.count < 6) {
          this.setState({ count: this.state.count + 1 });
        } else {
          clearInterval(intervalId);
          this.setState({ intervalId: null });
        }
      }, 500); // Update every 1 second

      this.setState({ intervalId }); // Store interval ID in state
    }, 1000); // Simulate 1 second delay before starting

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
        <p className='text-xl'>with more than</p>
        <p className='text-7xl font-bold'> {this.state.count} years</p>
        <p className='text-5xl'>experience</p>
      </div>
    );
  }
}

export default Years;
