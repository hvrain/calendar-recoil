import React, { useMemo, useState } from "react";
import {
  ActionIcon,
  Center,
  Container,
  Flex,
  SimpleGrid,
  Title,
  MantineTheme,
  Grid,
} from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { format, getDay, getMonth } from "date-fns";
import CalendarDate from "../features/CalendarDate";

const StyledContainer = styled(Container)(
  ({ theme }) => css`
    background-color: ${theme.colors.dark[6]};
    color: ${theme.colors.gray[3]};
    margin: 15px;
    padding: 30px;
    border-radius: 20px;
    min-width: 720px;
  `
);

const ArrowButton: React.FC<{ pos: "left" | "right" }> = ({ pos }) => (
  <ActionIcon variant="subtle">
    {pos === "left" ? (
      <IconChevronLeft size={30} />
    ) : (
      <IconChevronRight size={30} />
    )}
  </ActionIcon>
);

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { year, month, date, firstDate, lastDate } = useMemo(() => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const date = selectedDate.getDate();
    return {
      year,
      month,
      date,
      firstDate: new Date(year, month, 1),
      lastDate: new Date(year, month + 1, 0),
    };
  }, [selectedDate]);

  const pad = () =>
    [...Array(firstDate.getDay()).keys()].map((d) => (
      <Grid.Col span={1} style={{ minHeight: "110px" }}></Grid.Col>
    ));

  const range = () =>
    [...Array(lastDate.getDate()).keys()].map((d) => (
      <CalendarDate key={d} date={new Date(year, month, d + 1)} />
    ));

  const renderDates = () => [...pad(), ...range()].map((item) => item);

  return (
    <StyledContainer>
      <Flex direction={"column"}>
        <Center>
          <ArrowButton pos="left" />
          <Title order={3} weight={400} px={10}>
            {format(selectedDate, "MMMM/y").split("/").join(" ")}
          </Title>
          <ArrowButton pos="right" />
        </Center>
        <Center>
          <Grid w="100%" columns={7} gutter={0} justify="space-between" mt={36}>
            {days.map((day) => (
              <Grid.Col span={1}>{day}</Grid.Col>
            ))}
            {renderDates()}
          </Grid>
        </Center>
      </Flex>
    </StyledContainer>
  );
};

export default Calendar;
