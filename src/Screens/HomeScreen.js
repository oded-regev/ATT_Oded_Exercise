import React, { Component } from 'react'
import { View, Text, Button, FlatList, TouchableHighlight, StyleSheet } from 'react-native'
import { fetchUsers } from '../NetworkUtils/RandomUserApi'
import styles from './Styles/HomeScreenStyles';

class HomeScreen extends Component {

  constructor (props) {
    super(props)
    this.state = {
      users: [],
      error: null
    }
  }

  componentDidMount() {
    fetchUsers(10)
      .then(response => response.data ? this.setState({users: [...this.state.users, ...response.data.results]}) : this.setState({error: "Bad response"}))
      .catch(error => this.setState({error: error}))
  }

  componentDidUpdate() {
    console.log("componentDidUpdate: this.state.users: " + JSON.stringify(this.state.users))
  }

  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {this.state.error &&
          <Text style={styles.errorText}>{`Random Users API - returned with error: ${this.state.error}`}</Text>
        }
        {this.state.users.length > 0 &&
          <FlatList
            data={this.state.users}
            renderItem={({ item }) => (
              <TouchableHighlight
                  style={styles.item}
                  key={item.key}
                  onPress={() => this.props.navigation.navigate('Details', {item})}>
                  <Text style={styles.title}>{`${item.name.first} ${item.name.last}`}</Text>
              </TouchableHighlight>
            )}
            keyExtractor={item => item.name.last}
          />
        }
      </View>
    )
  }
}



export default HomeScreen
