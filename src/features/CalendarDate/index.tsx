import React from "react";
import { Flex, Center, Grid } from "@mantine/core";
import TodoStatisticsModal from "../TodoStatisticsModal/index";

type Props = {
  date: Date;
};

const CalendarDate: React.FC<Props> = ({ date }) => {
  const renderTodoList = () => {
    const todoList = ["1"];

    return todoList.map((todo) => <Center>{todo}</Center>);
  };

  return (
    <Grid.Col span={1} style={{ minHeight: "110px" }}>
      <Flex justify="flex-end">
        <TodoStatisticsModal date={date} />
      </Flex>
      {renderTodoList()}
    </Grid.Col>
  );
};

export default CalendarDate;
