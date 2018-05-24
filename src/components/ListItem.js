import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {

        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={styles.descriptionTextStyle}>{library.description}</Text>
                </CardSection>
            );
        };

    }

    render() {

        const { id, title } = this.props.library;

        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyling}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
};

const styles = StyleSheet.create({
    titleStyling: {
        fontSize: 18,
        paddingLeft: 15
    },
    descriptionTextStyle: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15
    }
});

const mapStateToProps = (state, ownProps) => {

    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);