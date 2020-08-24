import React, { Component } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import styles from './Styles/DetailsScreenStyles';


class DetailsScreen extends Component {

  constructor (props) {
    super(props)
    this.state = {
      user: this.props.route.params.item
    }
  }

  render () {
    let location = this.state.user.location
    let name = this.state.user.name
    console.log("fd: " + JSON.stringify(this.state.user))
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: this.state.user.picture.large,
          }}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsText}>{`Name: ${name.first} ${name.last}`}</Text>
          <Text style={styles.detailsText}>{`Address: ${location.street.number} ${location.street.name}, ${location.city} ${location.state}, ${location.country}`}</Text>
          <Text style={styles.detailsText}>{`Email: ${this.state.user.email}`}</Text>
          <Text style={styles.detailsText}>{`Phone: ${this.state.user.phone}`}</Text>
          <Text style={styles.detailsText}>{`Cell: ${this.state.user.cell}`}</Text>
        </View>
      </View>
    )
  }
}


export default DetailsScreen
