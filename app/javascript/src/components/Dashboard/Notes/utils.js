import dayjs from "dayjs";

export const displayDayAndTime = date => dayjs(date).format("dddd, hh:mmA");

export const displayTimeFromCreation = date => dayjs(date).fromNow();
