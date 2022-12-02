import {
  Button,
  ButtonProps,
  Center,
  createPolymorphicComponent,
  Modal,
  TextInput,
} from "@mantine/core";
import { format, isSameDay } from "date-fns";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { UnstyledButton } from "@mantine/core";
import { selectedDateState } from "../TodoFormModal/atom";
import { useRecoilState } from "recoil";

type MyButtonProps = ButtonProps & {
  isSelected?: boolean;
  isToday?: boolean;
};

const MyButton = styled("button")<MyButtonProps>(
  ({ theme: { colors }, isSelected, isToday }) => css`
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 50%;
    background-color: ${isSelected
      ? colors.violet[7]
      : isToday
      ? colors.dark[4]
      : "transparent"};
    color: ${colors.violet[1]};
  `
);

type Props = {
  date: Date;
};

const TodoStatisticsModal: React.FC<Props> = ({ date }) => {
  const [opened, setOpened] = useState(false);
  const [todo, setTodo] = useState("");

  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const today = new Date();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      //todoListState에 todo를 갱신
      setTodo("");
    }
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={`${format(date, "y-MM-dd")} 할 일 기록`}
        centered
      >
        <TextInput
          withAsterisk
          placeholder="write"
          onChange={({ target }) => setTodo(target.value)}
          onKeyDown={handleKeyDown}
        />
      </Modal>

      <MyButton
        isSelected={isSameDay(selectedDate, date)}
        isToday={isSameDay(date, today)}
        onClick={() => setSelectedDate(date)}
        onDoubleClick={() => setOpened(true)}
      >
        {date.getDate()}
      </MyButton>
    </>
  );
};

export default TodoStatisticsModal;
