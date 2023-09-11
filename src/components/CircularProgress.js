import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const CircularProgressBar = ({ percentage }) => {
  // Calculate the degrees to rotate the progress arc
  const degrees = (percentage * 3.6).toFixed(2);

  return (
    <View style={styles.container}>
      <View style={styles.outerCircle}>
        <View
          style={[
            styles.innerCircle,
            { transform: [{ rotate: `${degrees}deg` }] },
          ]}
        >
        </View>
          <Text style={styles.progressText}>{`${percentage}%`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    // backgroundColor: 'lightgray', // Background color of the circular progress bar container
  },
  outerCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4, // Border width of the circular progress bar
    borderColor: 'blue', // Border color
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
    backgroundColor: 'transparent',
    borderTopWidth: 4, // Border width to fill
    borderTopColor: 'blue', // Color to fill the border
    position: 'absolute',
    top: 0,
    left: 0,
  },
  progressText: {
    fontSize: 16,
  },
});

export default CircularProgressBar;
