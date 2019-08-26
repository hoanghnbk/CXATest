import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';
import { Icon } from 'native-base';

import styles from './style';
import AppBar from 'src/components/AppBar';


export default class TodoListScene extends Component {

    render() {
        return (
            <View
                style={styles.container}
            >

                <AppBar
                    title={'To-do List'}
                    disableBack
                    rightTitle={'Movie'}
                    rightPress={this.onHeaderButtonRightPress}/>

                <View style={styles.contentContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={this.changeTextSearchHandler}
                            onSubmitEditing={this.searchTodo}
                            value={this.state.searchText}
                            placeholder="Search Tasks"
                            returnKeyType="done"
                            returnKeyLabel="done"
                        />
                        <TouchableOpacity onPress={this.clearSearch}>
                            <Icon
                                name={'close'}
                                style={styles.iconClear}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.searchTodo}
                            style={styles.buttonNavigate}
                        >
                            <Text>Search</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        style={styles.list}
                        data={this.state.tasks}
                        extraData={this.state.tasks}
                        keyExtractor={(item, index) => item.key?.toString() || index.toString()}
                        renderItem={this.renderTodoItem}
                    />

                    <View style={{ flexDirection: 'row' }}>

                        <TextInput
                            style={styles.textInput}
                            onChangeText={this.changeTextHandler}
                            onSubmitEditing={this.addTask}
                            value={this.state.text}
                            placeholder="Add Tasks"
                            returnKeyType="done"
                            returnKeyLabel="done"
                        />

                        <TouchableOpacity
                            onPress={this.addTask}
                            style={styles.buttonNavigate}
                        >

                            <Text>Add task</Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    renderTodoItem = ({ item, index }) => {

        return (
            <TouchableOpacity
                style={[styles.listItemCont, item.color]}
                onPress={() => this.onMarkAsComplete(item,index)}
            >
                {
                    item.isComplete && (
                        <Icon
                            name={'checkmark-circle'}
                            style={styles.iconCheckMark}/>
                    )
                }
                <Text style={[styles.listItem,item.isComplete&&styles.lineThrough]}>
                    {item.text}
                </Text>

                <TouchableOpacity style={styles.button} color={'transparent'}
                                  onPress={() => this.handleDeleteTask(index)}>
                    <Icon
                        name={'close'}
                        style={styles.iconClose}
                    />
                </TouchableOpacity>
            </TouchableOpacity>
        );
    };

}

