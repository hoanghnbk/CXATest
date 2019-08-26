import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button, Header, Icon, Left, Right, Title, Body } from 'native-base';
import NavigationService from 'src/routers/NavigationService';

export const ICO_BACK = 'arrow-back';

type Props = {
    leftPress?: () => void,
    rightPress?: () => void,
    leftIcon?: string,
    leftTitle?: string,
    rightIcon?: string,
    rightTitle?: string,
    title?: string,
    style?: any,
    disableBack?: boolean,

}

export default class AppBar extends Component<Props> {

    shouldRenderRight() {
        const { rightPress, rightIcon, rightTitle } = this.props;
        return (rightIcon || rightTitle) && rightPress;
    }

    renderLeft = () => {
        const { leftPress, leftIcon, leftTitle } = this.props;
        return (
            <Button transparent onPress={leftIcon || leftTitle ? leftPress : () => NavigationService.goBack()}>
                {
                    leftTitle
                        ?
                        <Text>{leftTitle}</Text>
                        :
                        <Icon name={leftIcon ? leftIcon : ICO_BACK}/>
                }
            </Button>
        );
    };
    renderRight = () => {
        const { rightPress, rightIcon, rightTitle } = this.props;
        return (
            <Button transparent onPress={rightPress}>
                {
                    rightTitle ? <Text>{rightTitle}</Text> :
                        rightIcon.length > 1 ? <Icon name={rightIcon}/> : <Icon>{rightIcon}</Icon>
                }
            </Button>
        );
    };

    render() {
        const { title, style, disableBack } = this.props;

        return (
            <Header style={style}>
                <Left style={styles.left}>
                    {!disableBack && this.renderLeft()}
                </Left>

                <Body style={styles.body}>
                <Title large style={styles.title}>{title}</Title>
                </Body>

                <Right style={styles.right}>
                    {this.shouldRenderRight() && this.renderRight()
                    }
                </Right>
            </Header>);
    }
}

const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
    },

    left: {
        flex: 1,
    },
    body: {
        flex: 3,
    },
});
